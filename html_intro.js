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

    var mainSections = document.querySelectorAll("main section");

    mainSections.forEach(function(section) {
        section.addEventListener("click", function() {
            this.style.backgroundColor = "#f4f4f4"; // Change background color on section click
        });
    });
};
```
