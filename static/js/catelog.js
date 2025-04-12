const catalogData = [
    {
        name: "Paracetamol",
        description: "Used to treat pain and fever.",
        price: "₹50",
        image: "paracetamol.jpg"
    },
    {
        name: "Ibuprofen",
        description: "Relieves pain, fever, and inflammation.",
        price: "₹75",
        image: "ibuprofen.jpg"
    },
    {
        name: "Amoxicillin",
        description: "Antibiotic used to treat infections.",
        price: "₹120",
        image: "amoxicillin.jpg"
    },
    {
        name: "Cough Syrup",
        description: "Provides relief from cough and throat irritation.",
        price: "₹90",
        image: "cough_syrup.jpg"
    }
];

// Function to load catalog items dynamically
function loadCatalog() {
    const catalogContainer = document.getElementById("catalog-grid");
    catalogContainer.innerHTML = ""; // Clear existing content

    catalogData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("catalog-card");
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <strong>${item.price}</strong>
        `;

        catalogContainer.appendChild(card);
    });
}

// Function to filter catalog items based on search
function searchCatalog() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredData = catalogData.filter(item => 
        item.name.toLowerCase().includes(searchInput) || 
        item.description.toLowerCase().includes(searchInput)
    );

    displayFilteredCatalog(filteredData);
}

// Function to update the catalog display
function displayFilteredCatalog(filteredData) {
    const catalogContainer = document.getElementById("catalog-grid");
    catalogContainer.innerHTML = "";

    if (filteredData.length === 0) {
        catalogContainer.innerHTML = `<p>No medicines found.</p>`;
        return;
    }

    filteredData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("catalog-card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <strong>${item.price}</strong>
        `;

        catalogContainer.appendChild(card);
    });
}

// Load catalog when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    loadCatalog();

    // Attach event listener to the search box
    document.getElementById("search-input").addEventListener("input", searchCatalog);
});

