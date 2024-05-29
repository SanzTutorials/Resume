fetch('resume.json')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('introduction').textContent = data.introduction;
    document.getElementById('name').textContent = data.name;
    document.getElementById('email').textContent = data.contact.email;
    document.getElementById('phone').textContent = data.contact.phone;
    
    const educationList = document.getElementById('education');
    data.education.forEach((education) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${education.degree} - ${education.university}, ${education.year}`;
      educationList.appendChild(listItem);
    });
    
    const skillsList = document.getElementById('skills');
    data.skills.forEach((skill) => {
      const listItem = document.createElement('li');
      listItem.textContent = skill;
      skillsList.appendChild(listItem);
    });
    
    const experienceList = document.getElementById('experience');
    data.experience.forEach((experience) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${experience.position}</strong> - ${experience.company}, ${experience.duration}<ul>${experience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}</ul>`;
      experienceList.appendChild(listItem);
    });
  })
  .catch((error) => console.error('Error fetching data:', error));
