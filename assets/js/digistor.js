let digiStoreProducts = {
    data: [
      /*
      {
        digiStoreProductName: "Citadel Pre-Boot Authentication",
        category: "Products",
        image: "./assets/images/digiStore/Citadel-Pre-Boot-Authentication.png",
        defination: "Digital investigation, eDiscovery, forensic data acquisition",
        link: "https://digistor.com/products/citadel/c-series/" // Add link for this product
      },*/
      {
        digiStoreProductName: "Citadel Pre-Boot Authentication",
        category: "Products",
        image: "./assets/images/digiStore/Citadel-Pre-Boot-Authentication.png",
        defination: "Digital investigation, eDiscovery, forensic data acquisition",
        link: "https://digistor.com/products/citadel/c-series/" // Add link for this product
      },

    
    
       
       
     

  
  
    ],
  };
  
  for (let i of digiStoreProducts.data) {
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
    name.innerText = i.digiStoreProductName.toUpperCase();
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
  
    document.getElementById("digiStoreProducts").appendChild(card);
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