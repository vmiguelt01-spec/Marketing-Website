// This ensures the script waits for the website to fully load
window.addEventListener('load', () => {console.log("JavaScript is successfully linked and running!"); // DEBUG LINE    
    const observerOptions = {
        // 0.2 means trigger when just 20% of the card is visible (better for mobile)
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // This adds the green box class we wrote in CSS
                entry.target.classList.add('is-visible');
            } else {
                // Optional: Turns it off when you scroll past
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Find every card and start watching it
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Handle the Contact Form separately
    const leadForm = document.getElementById('leadForm');
    if(leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            leadForm.style.display = 'none';
            document.getElementById('formMessage').classList.remove('hidden');
        });
    }
});
