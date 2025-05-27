document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('betaRegistrationForm');
    const scheduleBtn = document.getElementById('scheduleBetaCall');

    if (form && scheduleBtn) {
        scheduleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const name = form.querySelector('#name').value.trim();
            const email = form.querySelector('#email').value.trim();
            if (!name || !email) {
                alert('Please enter your name and email.');
                return;
            }
            // Fire GA4 select_plan event
            if (window.gtag) {
                window.gtag('event', 'select_plan', {
                    plan_name: 'Beta Call',
                    value: 0
                });
            }
            // Open Calendly popup
            window.Calendly && window.Calendly.initPopupWidget({
                url: 'https://calendly.com/jason-parakletos?name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email)
            });
        });
        // Prevent form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    }
}); 