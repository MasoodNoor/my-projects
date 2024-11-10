// Function to toggle visibility of specific sections using classes
function setupToggleButtons() {
    // Select all toggle buttons with a common class, e.g., 'toggle-button'
    var buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(function (button) {
        // Add a click event listener to each button
        button.addEventListener('click', function () {
            // Find the section that this button is meant to toggle
            var sectionClass = button.getAttribute('data-section');
            var section = document.querySelector(".".concat(sectionClass));
            if (section) {
                // Toggle the display property of the section
                if (section.style.display === 'none' || section.style.display === '') {
                    section.style.display = 'block';
                    button.textContent = 'Hide Section'; // Update button text
                }
                else {
                    section.style.display = 'none';
                    button.textContent = 'Show Section'; // Update button text
                }
            }
        });
    });
}
// Initialize the toggle functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupToggleButtons);
