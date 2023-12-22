```javascript
window.onload = function() {
    // Change the color of the navigation links on mouseover and mouseout
    var navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.color = "#FF6347"; // Change color on mouse over
        });

        link.addEventListener("mouseout", function() {
            this.style.color = "#fff"; // Change color back on mouse out
        });
    });

    // Add interactivity to the main content
    var mainContent = document.querySelector("main");

    mainContent.addEventListener("click", function() {
        alert("You clicked on the main content!");
    });
};
```
