// summary_encouragement.js

document.addEventListener('DOMContentLoaded', function() {
    // Select the main element
    const mainElement = document.querySelector('main');

    // Create a summary section
    const summarySection = document.createElement('section');
    summarySection.innerHTML = `
        <h2>Summary</h2>
        <p>Recap of key points covered in the chapter</p>
    `;

    // Create an encouragement section
    const encouragementSection = document.createElement('section');
    encouragementSection.innerHTML = `
        <h2>Encouragement</h2>
        <p>Encouraging words for beginners embarking on their web development journey</p>
    `;

    // Append the sections to the main element
    mainElement.appendChild(summarySection);
    mainElement.appendChild(encouragementSection);
});
