// Display the current year and last modification date dynamically
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch and display members from the JSON file
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const container = document.querySelector('.business-directory');

    container.innerHTML = ''; // Clear the existing members

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('business-card');
        memberCard.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.tagline}</p>
            <p>Email: ${member.email}</p>
            <p>Phone: ${member.phone}</p>
            <p>URL: <a href="${member.website}">${member.website}</a></p>
        `;
        container.appendChild(memberCard);
    });
}

fetchMembers();
