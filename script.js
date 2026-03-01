// Wait for the DOM to fully load before attaching events
document.addEventListener('DOMContentLoaded', () => {
    
    const leadForm = document.getElementById('leadForm');
    const formMessage = document.getElementById('formMessage');

    // Handle form submission
    leadForm.addEventListener('submit', function(event) {
        // Prevent the default form submission (which refreshes the page)
        event.preventDefault();

        // Here, you would normally send the data to a server using fetch() or an API
        // For example: capturing the budget range and website URL.
        
        // Hide the form and show the success message to the user
        leadForm.style.display = 'none';
        formMessage.classList.remove('hidden');

        // Optional: Log to console to verify it works during testing
        console.log("Form successfully submitted. Ready to audit the prospect's numbers.");
    });
});