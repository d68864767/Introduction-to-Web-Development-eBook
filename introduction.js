```javascript
window.onload = function() {
    var sectionHeaders = document.querySelectorAll("main section h3");

    sectionHeaders.forEach(function(header) {
        header.addEventListener("click", function() {
            alert("You're on your way to becoming a web developer! Keep going!");
        });
    });
};
```
