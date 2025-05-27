const { CosmosClient } = require('@azure/cosmos');
const { DefaultAzureCredential } = require('@azure/identity');
const { EmailClient } = require('@azure/communication-email');

module.exports = async function (context, req) {
    try {
        // Validate request
        if (!req.body || !req.body.name || !req.body.email) {
            context.res = {
                status: 400,
                body: { error: 'Name and email are required' }
            };
            return;
        }

        // Initialize Cosmos DB client
        const cosmosClient = new CosmosClient({
            endpoint: process.env.COSMOS_ENDPOINT,
            credential: new DefaultAzureCredential()
        });

        const database = cosmosClient.database('parakletos');
        const container = database.container('registrations');

        // Create registration record
        const registration = {
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        // Save to Cosmos DB
        await container.items.create(registration);

        // Send email notification
        const emailClient = new EmailClient(process.env.COMMUNICATION_SERVICES_CONNECTION_STRING);
        
        // Send to admin
        await emailClient.send({
            senderAddress: "noreply@parakletos.com",
            content: {
                subject: "New Beta Registration",
                plainText: `New registration from ${req.body.name} (${req.body.email})`
            },
            recipients: {
                to: [{ address: "jason@parakletos.com" }]
            }
        });

        // Send confirmation to user
        await emailClient.send({
            senderAddress: "noreply@parakletos.com",
            content: {
                subject: "Welcome to Parakletos Beta",
                plainText: `Thank you for your interest in Parakletos, ${req.body.name}! We'll review your application and get back to you shortly.`
            },
            recipients: {
                to: [{ address: req.body.email }]
            }
        });

        // Return success response
        context.res = {
            status: 200,
            body: { message: 'Registration successful' }
        };

    } catch (error) {
        context.log.error('Error processing registration:', error);
        context.res = {
            status: 500,
            body: { error: 'Internal server error' }
        };
    }
}; 