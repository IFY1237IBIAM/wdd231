const destinations = [
    {
        name: "Abuja",
        description: "The city of light, known for its art, fashion, and culture.",
        image: "images/country.jpg"
    },
    {
        name: "Jos",
        description: "A bustling metropolis blending traditional and modern.",
        image: "images/jos.jpg"
    }
];

const featuredDestinationsContainer = document.getElementById("destination-cards");
const projectDestinationsContainer = document.getElementById("featured-destinations");
const destinationCardsContainer = document.getElementById("destination-cards");

function createDestinationCard(destination) {
    const card = document.createElement("div");
    card.className = "destination-cards";
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
    `;
    return card;
}

destinations.forEach(destination => {
    const card = createDestinationCard(destination);
    featuredDestinationsContainer.appendChild(card);
    destinationCardsContainer.appendChild(card.cloneNode(true));
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("active");
});
