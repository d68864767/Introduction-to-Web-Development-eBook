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

    var sections = document.querySelectorAll("main section");

    sections.forEach(function(section) {
        section.addEventListener("click", function() {
            this.classList.toggle("expanded");
        });
    });
};
```
