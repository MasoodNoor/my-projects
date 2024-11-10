// Function to toggle visibility of specific sections using classes
function setupToggleButtons() {
    // Select all toggle buttons with a common class, e.g., 'toggle-button'
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', () => {
            // Find the section that this button is meant to toggle
            const sectionClass = button.getAttribute('data-section');
            const section = document.querySelector(`.${sectionClass}`) as HTMLElement;

            if (section) {
                // Toggle the display property of the section
                if (section.style.display === 'none' || section.style.display === '') {
                    section.style.display = 'block';
                    button.textContent = 'Hide Section'; // Update button text
                } else {
                    section.style.display = 'none';
                    button.textContent = 'Show Section'; // Update button text
                }
            }
        });
    });
}

// Initialize the toggle functionality when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupToggleButtons);
