
// Toggle navigation menu for mobile view
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
// Display the current year and last modification date dynamically
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch and display members from the JSON file
async function loadCompanySpotlights() {
    try {
        const response = await fetch('data/members.json'); // Ensure the path to your JSON file is correct
        const companies = await response.json();
        const spotlightsDiv = document.getElementById('spotlights');
        const filteredCompanies = companies.filter(company => company.membershipLevel === 'Gold' || company.membershipLevel === 'Silver');
        
        // Randomly select 2-3 companies from the filtered list
        const selectedCompanies = getRandomElements(filteredCompanies, 2);
        
        // Display selected companies
        selectedCompanies.forEach(company => {
            spotlightsDiv.innerHTML += `
                <div class="business-card">
                    <h3>${member.name}</h3>
                    <img src="${company.logo}" alt="${company.name} Logo" />
                    <p>Phone: ${company.phone}</p>
                    <p>Address: ${company.address}</p>
                    <p><a href="${company.website}" target="_blank">Visit Website</a></p>
                    <p>Membership Level: ${company.membershipLevel}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error('Error loading company spotlights:', error);
        document.getElementById('spotlights').innerHTML = '<p>Error loading company spotlights.</p>';
    }
}

// Function to get random elements from an array
function getRandomElements(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

fetchMembers();
