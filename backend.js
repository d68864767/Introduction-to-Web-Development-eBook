```javascript
// backend.js

// This script is linked to the backend.html page.
// You can add JavaScript code here that will only affect the backend page.

// For example, you might want to add some interactivity to the page, like a button that shows more information when clicked.

// Here's a simple example:

window.onload = function() {
    var backendIntro = document.querySelector("main section p");
    var readMoreButton = document.createElement("button");

    readMoreButton.textContent = "Read More";
    backendIntro.appendChild(readMoreButton);

    readMoreButton.addEventListener("click", function() {
        var moreInfo = document.createElement("p");
        moreInfo.textContent = "Back-end development includes languages like Python, Java, Ruby, .NET, and more. It's all about server-side scripting!";
        backendIntro.appendChild(moreInfo);
        readMoreButton.style.display = "none"; // Hide the button after it's clicked
    });
};
```
