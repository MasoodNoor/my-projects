// Function to generate the resume preview based on form inputs
function generateResume(): void {
  // Get input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const jobtitle = (document.getElementById("jobtitle") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  // const education = (document.getElementById("education") as HTMLInputElement)
  //   .value;
  // const skills = (document.getElementById("skills") as HTMLInputElement).value;
  // const experience = (document.getElementById("experience") as HTMLInputElement).value;

  // Get dynamic experience values
  const educationFields = document.getElementsByClassName(
    "education-field"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const formattedEducation = Array.from(educationFields)
    .map((field) => `<p>${field.value}</p>`)
    .join("");

  const skillsFields = document.getElementsByClassName(
    "skills-field"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const formattedSkills = Array.from(skillsFields)
    .map((field) => `<p>${field.value}</p>`)
    .join("");

  const experienceFields = document.getElementsByClassName(
    "experience-field"
  ) as HTMLCollectionOf<HTMLInputElement>;
  const formattedExperience = Array.from(experienceFields)
    .map((field) => `<p>${field.value}</p>`) // Each experience field as <p>
    .join(""); // Join them together to form one HTML string

  // Function to add a new experience input field
  function addExperience(): void {
    const experienceList = document.getElementById(
      "experience-list"
    ) as HTMLElement;

    // Create a new input element for experience
    const experienceInput = document.createElement("input");
    experienceInput.type = "text";
    experienceInput.placeholder = "Enter your work experience";
    experienceInput.className = "experience-field";

    // Append the new input field to the experience list
    experienceList.appendChild(experienceInput);
  }

  // Function to remove the last experience input field
  function remExperience(): void {
    const experienceList = document.getElementById(
      "experience-list"
    ) as HTMLElement;

    // Remove the last input field if it exists
    if (experienceList.lastElementChild) {
      experienceList.removeChild(experienceList.lastElementChild);
    }
  }
  // Function to add a new skills input field
  // Function to add a new skills input field
function addSkills(): void {
  const skillsList = document.getElementById("skills-list") as HTMLElement;

  // Create a new input element for skills
  const skillsInput = document.createElement("input");
  skillsInput.type = "text";
  skillsInput.placeholder = "Enter your skills";
  skillsInput.className = "skills-field"; // Add a class for styling

  // Append the new input field to the skills list
  skillsList.appendChild(skillsInput);
}

// Function to remove the last skills input field
function remSkills(): void {
  const skillsList = document.getElementById("skills-list") as HTMLElement;

  // Remove the last input field if it exists
  if (skillsList.lastElementChild) {
    skillsList.removeChild(skillsList.lastElementChild);
  }
}

// Function to add a new education input field
function addEducation(): void {
  const educationList = document.getElementById("education-list") as HTMLElement;

  // Create a new input element for education
  const educationInput = document.createElement("input");
  educationInput.type = "text";
  educationInput.placeholder = "Enter your education";
  educationInput.className = "education-field"; // Add a class for styling

  // Append the new input field to the education list
  educationList.appendChild(educationInput);
}

// Function to remove the last education input field
function remEducation(): void {
  const educationList = document.getElementById("education-list") as HTMLElement;

  // Remove the last input field if it exists
  if (educationList.lastElementChild) {
    educationList.removeChild(educationList.lastElementChild);
  }
}

// Attach functions to the window object to make them accessible in HTML
(window as any).addSkills = addSkills;
(window as any).remSkills = remSkills;
(window as any).addEducation = addEducation;
(window as any).remEducation = remEducation;


  // Attach functions to the window object to make them accessible in HTML
  (window as any).addExperience = addExperience;
  (window as any).remExperience = remExperience;

  window.onload = () => {
    // Now you can call the functions directly by clicking the buttons
    // The functions should be accessible globally
  };

  // HTML structure for the resume preview
  const resumeContent = `
      
      <div class="header">
      
          <h1>${name || "Name"}</h1>
          <h2>${jobtitle || "Job title"}</h2>
                    
          </div>
          <hr>
      
      <div class="resume-section">
          <h3>Contact</h3>
          <p>${email || "Email Address"}</p>
          <p>${address || "Address"}</p>
          <p>${phone || "Phone Number"}</p>
      </div>
        <hr>


      <div class="resume-section">
          <h3>Education</h3>
          ${formattedEducation || "<p>Your Education Details</p>"}
      </div>
<hr>
      <div class="resume-section">
          <h3>Skills</h3>
          ${formattedSkills || "<p>Your skills provided</p>"}
      </div>
<hr>
      <div class="resume-section">
          <h3>Experience</h3>
          
          ${formattedExperience || "<p>Experience</p>"}
      </div>
      <hr>
  `;

  // Display the structured resume content in the preview area
  const previewElement = document.getElementById(
    "resume-preview"
  ) as HTMLElement;
  previewElement.innerHTML = resumeContent;
}
window.onload = () => {
  // Now you can call the functions directly by clicking the buttons
  // The functions should be accessible globally

  // Generate the resume preview when the page loads
  generateResume();
};