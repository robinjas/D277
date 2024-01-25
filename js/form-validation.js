document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            var email = document.getElementById('email').value;
            var confirmEmail = document.getElementById('confirmEmail').value;

            if (email !== confirmEmail) {
                alert('Emails do not match!');
                event.preventDefault(); // Prevent form submission
            }
        });
    }
});