// Function to generate the resume preview based on form inputs
function generateResume() {
    // Get input values
    var name = document.getElementById("name").value;
    var jobtitle = document.getElementById("jobtitle")
        .value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address")
        .value;
    var phone = document.getElementById("phone").value;
    // const education = (document.getElementById("education") as HTMLInputElement)
    //   .value;
    // const skills = (document.getElementById("skills") as HTMLInputElement).value;
    // const experience = (document.getElementById("experience") as HTMLInputElement).value;
    // Get dynamic experience values
    var educationFields = document.getElementsByClassName("education-field");
    var formattedEducation = Array.from(educationFields)
        .map(function (field) { return "<p>".concat(field.value, "</p>"); })
        .join("");
    var skillsFields = document.getElementsByClassName("skills-field");
    var formattedSkills = Array.from(skillsFields)
        .map(function (field) { return "<p>".concat(field.value, "</p>"); })
        .join("");
    var experienceFields = document.getElementsByClassName("experience-field");
    var formattedExperience = Array.from(experienceFields)
        .map(function (field) { return "<p>".concat(field.value, "</p>"); }) // Each experience field as <p>
        .join(""); // Join them together to form one HTML string
    // Function to add a new experience input field
    function addExperience() {
        var experienceList = document.getElementById("experience-list");
        // Create a new input element for experience
        var experienceInput = document.createElement("input");
        experienceInput.type = "text";
        experienceInput.placeholder = "Enter your work experience";
        experienceInput.className = "experience-field";
        // Append the new input field to the experience list
        experienceList.appendChild(experienceInput);
    }
    // Function to remove the last experience input field
    function remExperience() {
        var experienceList = document.getElementById("experience-list");
        // Remove the last input field if it exists
        if (experienceList.lastElementChild) {
            experienceList.removeChild(experienceList.lastElementChild);
        }
    }
    // Function to add a new skills input field
    // Function to add a new skills input field
    function addSkills() {
        var skillsList = document.getElementById("skills-list");
        // Create a new input element for skills
        var skillsInput = document.createElement("input");
        skillsInput.type = "text";
        skillsInput.placeholder = "Enter your skills";
        skillsInput.className = "skills-field"; // Add a class for styling
        // Append the new input field to the skills list
        skillsList.appendChild(skillsInput);
    }
    // Function to remove the last skills input field
    function remSkills() {
        var skillsList = document.getElementById("skills-list");
        // Remove the last input field if it exists
        if (skillsList.lastElementChild) {
            skillsList.removeChild(skillsList.lastElementChild);
        }
    }
    // Function to add a new education input field
    function addEducation() {
        var educationList = document.getElementById("education-list");
        // Create a new input element for education
        var educationInput = document.createElement("input");
        educationInput.type = "text";
        educationInput.placeholder = "Enter your education";
        educationInput.className = "education-field"; // Add a class for styling
        // Append the new input field to the education list
        educationList.appendChild(educationInput);
    }
    // Function to remove the last education input field
    function remEducation() {
        var educationList = document.getElementById("education-list");
        // Remove the last input field if it exists
        if (educationList.lastElementChild) {
            educationList.removeChild(educationList.lastElementChild);
        }
    }
    // Attach functions to the window object to make them accessible in HTML
    window.addSkills = addSkills;
    window.remSkills = remSkills;
    window.addEducation = addEducation;
    window.remEducation = remEducation;
    // Attach functions to the window object to make them accessible in HTML
    window.addExperience = addExperience;
    window.remExperience = remExperience;
    window.onload = function () {
        // Now you can call the functions directly by clicking the buttons
        // The functions should be accessible globally
    };
    // HTML structure for the resume preview
    var resumeContent = "\n      \n      <div class=\"header\">\n      \n          <h1>".concat(name || "Your Name", "</h1>\n          <h2>").concat(jobtitle || "Your Job title", "</h2>\n                    \n          </div>\n          <hr>\n      \n      <div class=\"resume-section\">\n          <h3>Contact</h3>\n          <p>").concat(email || "Your Email Address", "</p>\n          <p>").concat(address || "Your Address", "</p>\n          <p>").concat(phone || "Your Phone Number", "</p>\n      </div>\n        <hr>\n\n\n      <div class=\"resume-section\">\n          <h3>Education</h3>\n          ").concat(formattedEducation || "<p>Your Education Details</p>", "\n      </div>\n<hr>\n      <div class=\"resume-section\">\n          <h3>Skills</h3>\n          ").concat(formattedSkills || "<p>Your skills provided</p>", "\n      </div>\n<hr>\n      <div class=\"resume-section\">\n          <h3>Experience</h3>\n          \n          ").concat(formattedExperience || "<p>Experience</p>", "\n      </div>\n      <hr>\n  ");
    // Display the structured resume content in the preview area
    var previewElement = document.getElementById("resume-preview");
    previewElement.innerHTML = resumeContent;
}
window.onload = function () {
    // Now you can call the functions directly by clicking the buttons
    // The functions should be accessible globally
    // Generate the resume preview when the page loads
    generateResume();
};
