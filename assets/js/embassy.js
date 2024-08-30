let embassyProducts = {
    data: [
        //forensic-workstation
        {
            embassyProductName: "Forensic Workstation",
            category: "forensicWorkstation",
            image: "./assets/images/embassy/forensic-workstation1.png",
            definition: "", // Removed "Contact Us" text
        },
        {
            embassyProductName: "Faraday Bags",
            category: "faradayBags",
            image: "./assets/images/embassy/faraday-bags.jpeg",
            definition: "", // Removed "Contact Us" text
        },
    ],
};

for (let i of embassyProducts.data) {
    // Create card
    let card = document.createElement("div");

    // Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide"); // Updated to use category directly

    // Image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // Container for text
    let container = document.createElement("div");
    container.classList.add("container");

    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.embassyProductName.toUpperCase();
    container.appendChild(name);

    // Product definition
    let definition = document.createElement("h6");
    definition.innerText = i.definition;
    container.appendChild(definition);

    // Contact Us button
    let contactButton = document.createElement("a");
    contactButton.classList.add("contact-button");
    contactButton.setAttribute("href", "mailto:contact@yourdomain.com"); // Update with your contact email
    contactButton.setAttribute("target", "_blank"); // Open link in a new tab
    contactButton.innerText = "Contact Us";

    container.appendChild(contactButton);

    card.appendChild(container);

    document.getElementById("embassyProducts").appendChild(card);
}

// parameter passed from button {parameter same as category}
function filterProduct(value) {
    // button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach((element) => {
        // display all cards on 'all button click
        if (value == "all") {
            element.classList.remove('hide');
        }
        else {
            // check if element contains category class
            if (element.classList.contains(value)) {
                // display element based on category
                element.classList.remove("hide");
            }
            else {
                // hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// search button click
document.getElementById("search").addEventListener("click", () => {
    // initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    // loop through all elements
    elements.forEach((element, index) => {
        // check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            // display matching card
            cards[index].classList.remove("hide");
        }
        else {
            // hide others
            cards[index].classList.add("hide");
        }
    });
});

// initially display all products
window.onload = () => {
    filterProduct("all");
}
