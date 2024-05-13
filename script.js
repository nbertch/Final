document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to order buttons
    var orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach(function(button) {
        // Listen for site user to click on the order button
        button.addEventListener("click", function() {
            // Open the order page in a new tab
            window.open("order.html", "_blank");
            // Display the thank you message
            showThankYouMessage();
        });
    });

    function showThankYouMessage() {
        // Create a div element for the message
        var thankYouDiv = document.createElement("div");
        thankYouDiv.classList.add("thank-you-message");
        // Display thank you message on screen
        thankYouDiv.textContent = "Thank you for your order!";

        document.body.appendChild(thankYouDiv);

        // Remove message from screen 
        setTimeout(function() {
            document.body.removeChild(thankYouDiv);
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the search button
    var searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", function() {
        searchProducts();
    });
});

function searchProducts() {
    // Get the search query entered by the user
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    // Retrieve all product names or descriptions
    var productNames = document.querySelectorAll(".product-box h2");
    
    // Loop through each product name or description and check if it matches the search query
    for (var i = 0; i < productNames.length; i++) {
        var productName = productNames[i].textContent.toLowerCase();
        var productBox = productNames[i].parentNode; // Get the parent product box
        
        // If the product name contains the search query, display it; otherwise, hide it
        if (productName.indexOf(searchQuery) !== -1) {
            productBox.style.display = "block";
        } else {
            productBox.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var categoryLinks = document.querySelectorAll(".category-link");

    categoryLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var selectedCategory = link.getAttribute("data-category");
            filterProducts(selectedCategory);
        });
    });

    function filterProducts(category) {
        // Implement filtering logic here
        // For demonstration, let's assume you hide/show products based on category
        var products = document.querySelectorAll(".product-box");
        products.forEach(function(product) {
            if (product.getAttribute("data-category") === category || category === "all") {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var sortSelect = document.getElementById("sort");

    sortSelect.addEventListener("change", function() {
        var selectedOption = sortSelect.value;
        sortProducts(selectedOption);
    });

    function sortProducts(option) {
        var productsContainer = document.querySelector(".product-section");
        var products = Array.from(productsContainer.querySelectorAll(".product-box"));

        switch(option) {
            case "price-low-to-high":
                products.sort((a, b) => parseFloat(a.getAttribute("data-price")) - parseFloat(b.getAttribute("data-price")));
                break;
            case "price-high-to-low":
                products.sort((a, b) => parseFloat(b.getAttribute("data-price")) - parseFloat(a.getAttribute("data-price")));
                break;

            case "alphabetical":
                products.sort((a, b) => a.getAttribute("data-name").localeCompare(b.getAttribute("data-name")));
                break;
            default:
                // No sorting, use default order
                break;
        }

        // Remove existing products from container
        productsContainer.innerHTML = "";

        // Append sorted products back to container
        products.forEach(function(product) {
            productsContainer.appendChild(product);
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Sale Popup
    var salePopup = document.getElementById("salePopup");
    var closeButton = document.getElementsByClassName("close")[0];

    // When the page loads, show the sale popup
    window.onload = function() {
        salePopup.style.display = "block";
    }

    // Close the sale popup when the close button is clicked
    closeButton.onclick = function() {
        salePopup.style.display = "none";
    }

    // Close the sale popup when clicking outside of it
    window.onclick = function(event) {
        if (event.target == salePopup) {
            salePopup.style.display = "none";
        }
    }

    // Add event listeners to order buttons
    var orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach(function(button) {
        // Listen for user clicks on the order button
        button.addEventListener("click", function() {
            // Display the thank you message
            showThankYouMessage();
        });
    });

    // Function to show the thank you message
    function showThankYouMessage() {
        // Create a div element for the message
        var thankYouDiv = document.createElement("div");
        thankYouDiv.classList.add("thank-you-message");
        // Display the thank you message on the screen
        thankYouDiv.textContent = "Thank you for your order!";
        document.body.appendChild(thankYouDiv);
        // Remove the message from the screen after 1 second
        setTimeout(function() {
            document.body.removeChild(thankYouDiv);
        }, 1000);
    }
});

