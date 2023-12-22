```javascript
// fullstack.js

// This file will contain specific JavaScript for the Full-Stack Development page

window.onload = function() {
    // Get the h2 element in main
    var mainHeading = document.querySelector("main h2");

    // Change the color of the h2 element when mouse is over it
    mainHeading.addEventListener("mouseover", function() {
        this.style.color = "#FF6347";
    });

    // Change the color back when mouse is out
    mainHeading.addEventListener("mouseout", function() {
        this.style.color = "#000";
    });

    // Get the paragraphs in main
    var mainParagraphs = document.querySelectorAll("main p");

    // Add a class to the paragraphs when clicked
    mainParagraphs.forEach(function(paragraph) {
        paragraph.addEventListener("click", function() {
            this.classList.add("highlight");
        });
    });
};

// The "highlight" class should be defined in the fullstack.css file
// For example:
// .highlight {
//     background-color: #FFFF00; // Yellow background
// }
```
