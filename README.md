This code creates a web developer resume webpage using HTML for structure, JavaScript to load data dynamically, and CSS for styling.

HTML Structure

Head Section:

<meta charset="UTF-8"> specifies the character encoding.
<meta name="viewport" content="width=device-width, initial-scale=1.0"> ensures the webpage is responsive.
<script src="script.js"></script> links to an external JavaScript file.
<link rel="stylesheet" href="style.css"> links to an external CSS file.
<title>Resume</title> sets the title of the webpage.

Body Section:

<header>: Contains a centered name heading and contact information.
<main>: Contains sections for introduction, education, technical skills, and work experience.
Each section has respective headings and placeholders (<ul>, <p>, etc.) for content that will be dynamically filled by JavaScript.
<footer>: Contains links to social media profiles with icons and a copyright notice.

JavaScript
The JavaScript code fetches data from a resume.json file and dynamically populates the HTML content.

fetch('resume.json'): Retrieves the JSON data.
.then((response) => response.json()): Parses the JSON data.
.then((data) => { ... }): Uses the data to populate the HTML elements:
    document.getElementById('introduction').textContent = data.introduction; sets the introduction text.
    document.getElementById('name').textContent = data.name; sets the name.
    document.getElementById('email').textContent = data.contact.email; sets the email.
    document.getElementById('phone').textContent = data.contact.phone; sets the phone number.
    Education: Iterates through the education array and creates list items for each entry.
    Skills: Iterates through the skills array and creates list items for each skill.
    Experience: Iterates through the experience array, creating list items that include position, company, duration, and responsibilities.

JSON Data
The JSON file (resume.json) contains the resume data.

Basic Information: Name, contact details, and an introduction.
Education: Array of education objects, each containing degree, university, and year.
Skills: Array of skills.
Experience: Array of experience objects, each containing position, company, duration, and responsibilities.


