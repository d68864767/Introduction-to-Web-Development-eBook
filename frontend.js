```javascript
// frontend.js

// This script is specific to the Front-End Development page

window.onload = function() {
    // Get the Front-End Development link in the navigation
    var frontendLink = document.querySelector('nav ul li a[href="frontend.html"]');

    // Add an event listener for mouseover
    frontendLink.addEventListener("mouseover", function() {
        this.style.color = "#FF6347"; // Change color on mouse over
    });

    // Add an event listener for mouseout
    frontendLink.addEventListener("mouseout", function() {
        this.style.color = "#4CAF50"; // Change color back on mouse out to the color defined in frontend.css
    });

    // Get the main section
    var mainSection = document.querySelector('main section');

    // Add an event listener for click
    mainSection.addEventListener("click", function() {
        alert("You clicked on the main section of the Front-End Development page!"); // Display an alert on click
    });
};
```
