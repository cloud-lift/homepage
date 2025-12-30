document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlist-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;

        // Hide previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        try {
            // TODO: Replace with your actual API endpoint
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }),
            });

            if (response.ok) {
                successMessage.style.display = 'block';
                form.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);

            // For now, show success message even without backend
            // This allows you to see the design working
            successMessage.style.display = 'block';
            form.reset();

            // Uncomment this when you have a backend:
            // errorMessage.style.display = 'block';
            // errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});
