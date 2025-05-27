document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('betaRegistrationForm');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            try {
                // Disable button and show loading state
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                
                const formData = {
                    name: form.querySelector('#name').value,
                    email: form.querySelector('#email').value
                };
                
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    // Show success message
                    alert('Thank you for your interest! We will contact you shortly.');
                    form.reset();
                } else {
                    const error = await response.json();
                    throw new Error(error.error || 'Registration failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Sorry, there was an error processing your registration. Please try again.');
            } finally {
                // Re-enable button and restore text
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
}); 