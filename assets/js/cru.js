let cruProducts = {
  data: [
    {
      cruProductName: "DP20",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP20.png",
      defination: "Removable 2.5-inch hard drive/SSD for small form factor optical bay",
      link: "cruProduct/html/DP20.html" // Add link for this product
    },
    {
      cruProductName: "DP20 Dock",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP20-Dock.png",
      defination: "External enclosure for use with DP20 removable drive carriers",
      link: "cruProduct/html/DP20-dock.html" // Add link for this product
    },
    {
      cruProductName: "DP27",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP27.png",
      defination: "Replaces DVD for removable data security solution",
      link: "https://www.cru-inc.com/products/dataport/dp27/" // Add link for this product
    },
    {
      cruProductName: "DP27 Dock",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP27-Dock.png",
      defination: "External enclosure for use with DP20 removable drive carriers",
      link: "https://www.cru-inc.com/products/dataport/dp27-dock/" // Add link for this product
    },
    //3.5 bays
    {
      cruProductName: "RJ20S",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ20S.png",
      defination: "Removable 2.5-inch hard drive/SSD for 3.5-inch bay",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj20s/" // Add link for this product
    },
    {
      cruProductName: "SHIPS QX328 Frame",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/SHIPS-QX328-Frame.png",
      defination: "Ingest up to two DIGISTOR Q80 NVMe storage modules; fits in a standard 3.5-inch bay",
      link: "https://www.cru-inc.com/products/ships/qx328/" // Add link for this product
    },
    {
      cruProductName: "DE50 IDE",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE50-IDE.png",
      defination: "Compact and rugged removable drive enclosure for 2.5-inch IDE drives",
      link: "https://www.cru-inc.com/products/dataexpress/de50_idepata/" // Add link for this product
    },
    {
      cruProductName: "RJ21S",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ21S.png",
      defination: "Dual removable 2.5-inch hard drives/SSDs for 3.5-inch bay",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj21s/" // Add link for this product
    },
    {
      cruProductName: "DE50 SAS/SATA 6G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE50-SAS-SATA-6G.png",
      defination: "Compact and rugged removable drive enclosure for 2.5-inch SAS/SATA 6G drives",
      link: "https://www.cru-inc.com/products/dataexpress/de50_sassata_6g/" // Add link for this product
    },
    {
      cruProductName: "DE50 USB 2.0 Docking Station",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE50-USB-2.0-Docking-Station.png",
      defination: "External docking station for use with DE50 carriers",
      link: "https://www.cru-inc.com/products/dataexpress/de50_usb2-0_docking_station/" // Add link for this product
    },
    {
      cruProductName: "DP25 SATA 6G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-SATA-6G.png",
      defination: "6G frame and carrier for two 2.5-inch SATA drives",
      link: "https://www.cru-inc.com/products/dataport/dp25_sata_6g/" // Add link for this product
    },
    {
      cruProductName: "DP25 SAS 6G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-SAS-6G.png",
      defination: "Frame and carrier for 2.5-inch SAS and/or 5 or 12 volt SATA drive",
      link: "https://www.cru-inc.com/products/dataport/dp25_sas_6g/" // Add link for this product
    },
    {
      cruProductName: "DP25 Secure",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-Secure.png",
      defination: "Frame and carrier for hardware encryption of 2.5-inch SATA drive",
      link: "https://www.cru-inc.com/products/dataport/dp25_secure/" // Add link for this product
    },
    {
      cruProductName: "DP25 SL Slim-Line",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-SL-Slim-Line.png",
      defination: "Frame and carrier for 2.5-inch SATA drive for use in reduced height openings",
      link: "https://www.cru-inc.com/products/dataport/dp25_sl_slim-line/" // Add link for this product
    },
    {
      cruProductName: "DP25-3SJR",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-3SJR.png",
      defination: "USB 3.0/SATA enclosure for hardware RAID/JBOD of two 2.5-inch SATA drives",
      link: "https://www.cru-inc.com/products/dataport/dataport-dp25-3sjr/" // Add link for this product
    },
    {
      cruProductName: "DP25 IDE",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-IDE.png",
      defination: "Frame and carrier for two 2.5-inch IDE drives with IDE host",
      link: "https://www.cru-inc.com/products/dataport/dp25_ide/" // Add link for this product
    },
    {
      cruProductName: "DP25 IDE to SATA",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-IDE-to-SATA.png",
      defination: "Carrier for 2.5-inch SATA drive with IDE host",
      link: "https://www.cru-inc.com/products/dataport/dp25_ide-to-sata/" // Add link for this product
    },
    //5.25 bays
    {
      cruProductName: "DE275 SAS/SATA 3G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE275-SAS-SATA-3G.png",
      defination: "Low profile removable drive enclosure for older 3.5-inch SAS/SATA 3G drives",
      link: "https://www.cru-inc.com/products/dataexpress/de275_sassata_3g_aluminum_or_steel/" // Add link for this product
    },
    {
      cruProductName: "DP41",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP41.png",
      defination: "Burly flexibility and removability for four 2.5-inch hard drives/SSDs",
      link: "https://www.cru-inc.com/products/dataport/dataport41/" // Add link for this product
    },
    {
      cruProductName: "DP5 IDE/ATA-6",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP5-IDE-ATA-6.png",
      defination: "CRU® Removable Drive Enclosures",
      link: "https://www.cru-inc.com/products/dataport/dp5_ideata-6/" // Add link for this product
    },
    {
      cruProductName: "DX115 DC",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DX115-DC.png",
      defination: "Rugged removable hard drive carrier for digital movie distribution",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dx115/" // Add link for this product
    },
    {
      cruProductName: "DX175",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DX175.png",
      defination: "Designed for shorter 5.25-inch drive bays",
      link: "https://www.cru-inc.com/products/dataexpress/dx175/" // Add link for this product
    },
    {
      cruProductName: "RJ110",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ110.png",
      defination: "Removable 3.5-inch hard drive for 5.25-inch bay",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj110/" // Add link for this product
    },
    {
      cruProductName: "RJ24S",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ24S.png",
      defination: "Designed for shorter 5.25-inch drive bays",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj24s/" // Add link for this product
    },
    {
      cruProductName: "RJ32T",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ32T.png",
      defination: "Removable 3.5-inch hard drive for 5.25-inch bay",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj32t/" // Add link for this product
    },
    {
      cruProductName: "RJ33S",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ33S.png",
      defination: "Removable 3.5-inch HDD for 5.25-inch bay",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj33s/" // Add link for this product
    },
    {
      cruProductName: "RJ400",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ400.png",
      defination: "Four removable 3.5-inch HDD for three 5.25-inch bays",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj400/" // Add link for this product
    },
    {
      cruProductName: "SHIPS QX448 Frame",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/SHIPS-QX448-Frame.png",
      defination: "Ingest up to four rugged removable DIGISTOR Q80 NVMe storage modules in a 5.25-in bay",
      link: "https://www.cru-inc.com/products/ships/qx448/" // Add link for this product
    },
    {
      cruProductName: "DP10",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP10.png",
      defination: "Popular rugged removable drive for SAS/SATA 6G drives",
      link: "https://www.cru-inc.com/products/dataport/dp10_sassata_6g/" // Add link for this product
    },
    {
      cruProductName: "DP3 SATA",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP3-SATA.png",
      defination: "Affordable Removable Hard Drive Enclosures",
      link: "https://www.cru-inc.com/products/dataport/dp3_sata/" // Add link for this product
    },
    {
      cruProductName: "DP30 SATA to IDE",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP30-SATA-to-IDE.png",
      defination: "New Removable Drive Enclosure for Today's Systems",
      link: "https://www.cru-inc.com/products/dataport/dp30_sata-to-ide/" // Add link for this product
    },
    {
      cruProductName: "DP5 Plus IDE",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP5-Plus-IDE.png",
      defination: "CRU® Removable Drive Enclosures",
      link: "https://www.cru-inc.com/products/dataport/dp5_plus_ide/" // Add link for this product
    },
    {
      cruProductName: "DP5 SATA 3G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP5-SATA-3G.png",
      defination: "CRU® Removable Drive Enclosures",
      link: "https://www.cru-inc.com/products/dataport/dp5_sata_3g/" // Add link for this product
    },
    {
      cruProductName: "RJ21S Dell FlexBay Adapter Kit",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ21S-Dell-FlexBay-Adapter-Kit.png",
      defination: "RJ21S combined with a CD/DVD burner for systems with Dell FlexBay",
      link: "https://www.cru-inc.com/products/rhinojr/rj21s-dell-flexbay-adapter-kit/" // Add link for this product
    },
    {
      cruProductName: "RJ34S",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/RJ34S.png",
      defination: "Removable 3.5-inch HDD for 5.25-inch bay",
      link: "https://www.cru-inc.com/products/rhinojr/cru-rhino-jr-rj34s/" // Add link for this product
    },
    {
      cruProductName: "DP10 Secure",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP10-Secure.png",
      defination: "Encrypted removable drive for SAS/SATA 6G drives",
      link: "https://www.cru-inc.com/products/dataport/dp10_secure_256-bit/" // Add link for this product
    },
    {
      cruProductName: "DP5 Plus SATA 3G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP5-Plus-SATA-3G.png",
      defination: "CRU® Removable Drive Enclosures",
      link: "https://www.cru-inc.com/products/dataport/dp5_plus_sata_3g/" // Add link for this product
    },
    {
      cruProductName: "DX115",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DX115.png",
      defination: "Rugged removable hard drive enclosures for SAS/SATA drives",
      link: "https://www.cru-inc.com/products/dataexpress/dx115_sassata_6g/" // Add link for this product
    },
    {
      cruProductName: "DE110 SATA 6G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE110-SATA-6G.png",
      defination: "Rugged removable drive enclosure for 3.5-inch SATA 6G drives",
      link: "https://www.cru-inc.com/products/dataexpress/de110-sata-6g/" // Add link for this product
    },
    {
      cruProductName: "DE110 IDE",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE110-IDE.png",
      defination: "Rugged removable drive enclosure for 3.5-inch IDE drives",
      link: "https://www.cru-inc.com/products/dataexpress/de110_ide/" // Add link for this product
    },


    {
      cruProductName: "DE75 SAS/SATA 3G",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DE75-SAS-SATA-3G.png",
      defination: "Rugged removable drive enclosure for older 3.5-inch SAS/SATA 3.5-inch drives",
      link: "https://www.cru-inc.com/products/dataexpress/de75_sassata_3g/" // Add link for this product
    },
    {
      cruProductName: "DP5 Plus SCSI UW",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP5-Plus-SCSI-UW.png",
      defination: "CRU® Removable Drive Enclosure",
      link: "https://www.cru-inc.com/products/dataport/dp5_plus_scsi_uw/" // Add link for this product
    },
    {
      cruProductName: "DP25 Dell FlexBay Adapter Kit",
      category: "removableDrives",
      image: "./assets/images/cru/removableDrives/DP25-Dell-FlexBay-Adapter-Kit.png",
      defination: "DP25 frame and carrier combined with a CD/DVD burner for systems with Dell FlexBay",
      link: "https://www.cru-inc.com/products/dataport/dp25-dell-flexbay-adapter-kit/" // Add link for this product
    },

    // digital cinema===================
    {
      cruProductName: "DCP Kit 1",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/DCP-Kit-1.png",
      defination: "Rugged Shipping Case with DX115 DC Carrier Only",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dcp-kit-1/" // Add link for this product
    },
    {
      cruProductName: "DCP Kit 2",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/DCP-Kit-2.png",
      defination: "Rugged Shipping Case with DX115 DC Carrier and USB 3.0 MoveDock Adapter",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dcp-kit-2/" // Add link for this product
    },
    {
      cruProductName: "DCP Kit 3",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/DCP-Kit-3.png",
      defination: "Rugged Shipping Case with DX115 DC Carrier and USB 3.0/eSATA MoveDock 3S Adapter",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dcp-kit-3/" // Add link for this product
    },
    {
      cruProductName: "DX115 DC",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/DX115-DC.png",
      defination: "Rugged removable hard drive carrier for digital movie distribution",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dx115/" // Add link for this product
    },
    {
      cruProductName: "MoveDock",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/MoveDock.png",
      defination: "USB 3.0 Adapter for DX115 DC Carriers",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dx115/" // Add link for this product
    },
    {
      cruProductName: "MoveDock 3S",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/MoveDock-3S.png",
      defination: "USB 3.0 / eSATA Adapter for DX115 DC Carriers",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-movedock-3s/" // Add link for this product
    },
    {
      cruProductName: "RAX215DC 1U RackMount",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/RAX215DC-1U-RackMount.png",
      defination: "1-bay and 2-bay JBOD storage rack for digital movie content",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-215dc-1u-rackmount/" // Add link for this product
    },
    {
      cruProductName: "RAX425DC 2U RackMount",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/RAX425DC-2U-RackMount.png",
      defination: "4-bay JBOD storage rack for digital movie content",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-425dc-2u-rackmount/" // Add link for this product
    },
    {
      cruProductName: "RAX845DC 4U RackMount",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/RAX845DC-4U-RackMount.png",
      defination: "8-bay JBOD storage rack for digital movie content",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-845dc-4u-rackmount/g" // Add link for this product
    },
    {
      cruProductName: "RTX115DC-3Q",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/RTX115DC-3Q.png",
      defination: "8-bay JBOD storage rack for digital movie content",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-1-bay-enclosure/" // Add link for this product
    },
    {
      cruProductName: "DCmini",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/DCmini.png",
      defination: "Compact hard drive enclosure for digital movie distribution",
      link: "https://www.cru-inc.com/products/digital-cinema/digital-cinema-dcmini/" // Add link for this product
    },
    {
      cruProductName: "DCmini-Kits",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/DCmini-Kits.png",
      defination: "Rugged Shipping Case with DCmini Cartridge",
      link: "https://www.cru-inc.com/products/digital-cinema/dcmini-kits/" // Add link for this product
    },
    {
      cruProductName: "Mini Drive Shipping Case",
      category: "digitalCinema",
      image: "./assets/images/cru/digitalCinema/Mini-Drive-Shipping-Case.png",
      defination: "Protect your DCmini during shipment while reducing distribution costs",
      link: "https://www.cru-inc.com/products/digital-cinema/dc-mini-carrying-case/" // Add link for this product
    },
  ],
};

for (let i of cruProducts.data) {
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
  name.innerText = i.cruProductName.toUpperCase();
  container.appendChild(name);

  // Product definition
  let definitionLink = document.createElement("a");
  definitionLink.setAttribute("href", i.link); // Link URL
  definitionLink.setAttribute("target", "_blank"); // Open link in a new tab
  definitionLink.innerText = i.defination;

  container.appendChild(definitionLink);

  // Link button
  let linkButton = document.createElement("a");
  linkButton.classList.add("link-button");
  linkButton.setAttribute("href", i.link); // Link URL
  linkButton.setAttribute("target", "_blank"); // Open link in a new tab
  linkButton.innerText = " ";

  container.appendChild(linkButton);

  card.appendChild(container);

  document.getElementById("cruProducts").appendChild(card);
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
