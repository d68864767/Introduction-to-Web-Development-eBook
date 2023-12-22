```javascript
window.onload = function() {
    var navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.color = "#FF6347"; // Change color on mouse over
        });

        link.addEventListener("mouseout", function() {
            this.style.color = "#fff"; // Change color back on mouse out
        });
    });

    var mainHeader = document.querySelector("main h2");
    mainHeader.addEventListener("click", function() {
        this.style.color = this.style.color === "#333" ? "#FF6347" : "#333"; // Toggle color on click
    });
};
```
