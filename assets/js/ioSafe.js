let ioSafeProducts = {
    data: [
        //for personal use
        {
            ioSafeProductstName: "Solo G3",
            category: "For-Personal-Use",
            image: "./assets/images/ioSafe/Solo-G3.png",
            defination: "Silent, fast, and ideal for backing up and securing your most precious memories. The ioSafe Solo G3 packs the same great disaster-proof technology into a compelling solution for individuals or families.",
            link: "https://iosafe.com/products/solo-g3/" // Add link for this product
        },
        {
            ioSafeProductstName: "Solo G3 Secure",
            category: "For-Personal-Use",
            image: "./assets/images/ioSafe/Solo-G3-Secure.png",
            defination: "Isolate your data from cyber threats! In addition to great fireproof and waterproof protection, the ioSafe Solo G3 Secure creates an “air gap” between it and your computer.",
            link: "https://iosafe.com/products/solo-g3-secure/" // Add link for this product
        },
        {
            ioSafeProductstName: "Duo Pro",
            category: "For-Personal-Use",
            image: "./assets/images/ioSafe/Duo-Pro.png",
            defination: "Equipped with heavy-duty NAS drives for continuous operation and longevity, the USB 3/direct-attach Duo Pro is a simple RAID solution for SMBs.",
            link: "https://iosafe.com/products/duo-pro/" // Add link for this product
        },
        //for professional use
        {
            ioSafeProductstName: "SOLO G3 SECURE",
            category: "For-Professional-Use",
            image: "./assets/images/ioSafe/Solo-G3-Secure1.png",
            defination: "Isolate your data from cyber threats! In addition to great fireproof and waterproof protection, the ioSafe Solo G3 Secure creates an “air gap” between it and your computer.",
            link: "https://iosafe.com/products/solo-g3-secure/" // Add link for this product
        },
        {
            ioSafeProductstName: "218 NAS",
            category: "For-Professional-Use",
            image: "./assets/images/ioSafe/218-NAS.png",
            defination: "Equipped with heavy-duty NAS drives for continuous operation and longevity, the USB 3/direct-attach Duo Pro is a simple RAID solution for SMBs.",
            link: "https://iosafe.com/products/218-nas/" // Add link for this product
        },

        {
            ioSafeProductstName: "224+ NAS",
            category: "For-Professional-Use",
            image: "./assets/images/ioSafe/220+NAS.png",
            defination: "Equipped with heavy-duty NAS drives for continuous operation and longevity, the USB 3/direct-attach Duo Pro is a simple RAID solution for SMBs.",
            link: "https://iosafe.com/products/220plus/" // Add link for this product
        },

        {
            ioSafeProductstName: "1522+ NAS",
            category: "For-Professional-Use",
            image: "./assets/images/ioSafe/1522+NAS.png",
            defination: "Equipped with heavy-duty NAS drives for continuous operation and longevity, the USB 3/direct-attach Duo Pro is a simple RAID solution for SMBs.",
            link: "https://iosafe.com/products/1522-nas/" // Add link for this product
        },

        {
            ioSafeProductstName: "x517 5-Bay Expansion",
            category: "For-Professional-Use",
            image: "./assets/images/ioSafe/x517-5-Bay-Expansion.png",
            defination: "Equipped with heavy-duty NAS drives for continuous operation and longevity, the USB 3/direct-attach Duo Pro is a simple RAID solution for SMBs.",
            link: "https://iosafe.com/products/x517-expansion/" // Add link for this product
        },
        //for enterprise use
        {
            ioSafeProductstName: "218 NAS",
            category: "For-Enterprise-Use",
            image: "./assets/images/ioSafe/218-NAS-Enterprise.png",
            defination: "The ioSafe 218 is a nimble 2-bay NAS device great for SMBs or home offices. Straightforward backup and collaboration start here.",
            link: "https://iosafe.com/products/x517-expansion/" // Add link for this product
        },
        {
            ioSafeProductstName: "220+ NAS",
            category: "For-Enterprise-Use",
            image: "./assets/images/ioSafe/220+NAS-Enterprise.png",
            defination: "With an advanced set of features such as High Availability capability and Active Backup for Business, the ioSafe 224+ is a powerful NAS device for protecting your data.",
            link: "https://iosafe.com/products/x517-expansion/" // Add link for this product
        },
        {
            ioSafeProductstName: "1522+ NAS",
            category: "For-Enterprise-Use",
            image: "./assets/images/ioSafe/1522+NAS-Enterprise.png",
            defination: "Our flagship fireproof and waterproof five-bay 1522+ NAS device is perfect for organizations that need high-speed access to their data. The 1522+ can hold up to 70TB (expandable to 210TB) of networked storage and data protection.",
            link: "https://iosafe.com/products/x517-expansion/" // Add link for this product
        },
        {
            ioSafeProductstName: "x517 5-Bay Expansion",
            category: "For-Enterprise-Use",
            image: "./assets/images/ioSafe/x517-5-Bay-Expansion-Enterprise.png",
            defination: "The x517 Expansion Unit adds up to 70TB of networked storage and data protection to an ioSafe 1515+, 1517, or 1019+ NAS system.",
            link: "https://iosafe.com/products/x517-expansion/" // Add link for this product
        },









    ],
};

for (let i of ioSafeProducts.data) {
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
    name.innerText = i.ioSafeProductstName.toUpperCase();
    container.appendChild(name);

    // Product definition
    let defination = document.createElement("h6");
    defination.innerText = i.defination;
    container.appendChild(defination);

    // Link button
    let linkButton = document.createElement("a");
    linkButton.classList.add("link-button");
    linkButton.setAttribute("href", i.link); // Link URL
    linkButton.setAttribute("target", "_blank"); // Open link in a new tab
    linkButton.innerText = "Learn More";

    container.appendChild(linkButton);

    card.appendChild(container);

    document.getElementById("ioSafeProducts").appendChild(card);
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