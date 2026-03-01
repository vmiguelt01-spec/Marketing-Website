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
    const observerOptions = {
    threshold: 0.6 // Trigger when 60% of the card is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            // Optional: remove the class when scrolling away
            entry.target.classList.remove('is-visible');
        }
    });
}, observerOptions);

// Tell the observer to watch all your cards
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});});
