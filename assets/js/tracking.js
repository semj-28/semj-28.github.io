document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const submitButton = form.querySelector(".btn-submit");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop the page from reloading

            // Change button text to show it's working
            const originalButtonText = submitButton.innerText;
            submitButton.innerText = "Sending...";

            // Gather the data from the form
            const formData = new FormData(form);

            // 1. Send data to your Google Sheet API
            fetch("https://script.google.com/a/macros/google.com/s/AKfycbxejGnHZaBycFIZR-xQ9kLji59vYbA3Ee5gyybSzIWf02iYDT3gKBZ_KCKDDCAuYW1a1w/exec", {
                method: "POST",
                body: formData
            })
            .then(response => {
                // Success! Update the button UI
                submitButton.innerText = "Message Sent!";
                form.reset(); 

                // 🎯 2. THE MEASUREMENT PAYLOAD 🎯
                // Push the event and unhashed user data to the dataLayer 
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'generate_lead',
                    'user_data': {
                        'email': formData.get('_replyto'),
                        'address': {
                            'first_name': formData.get('name')
                        }
                    }
                });

                // Reset button text after 3 seconds
                setTimeout(() => {
                    submitButton.innerText = originalButtonText;
                }, 3000);
            })
            .catch(error => {
                console.error("Error!", error.message);
                submitButton.innerText = "Error. Try again.";
            });
        });
    }
});