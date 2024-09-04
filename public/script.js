// Set initial styles for body
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.style.fontFamily = "monospace";
document.body.style.fontSize = "20px";

// Function to add animated bubbles to the background
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);

    // Random position and animation duration
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;

    // Remove bubble after animation ends
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

// Function to generate bubbles continuously
function startBubbles() {
    setInterval(createBubble, 500); // Create a bubble every 500ms
}

// Typing effect for intro paragraph
function typeWriterEffect(element, text, speed) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    element.textContent = ''; // Clear text content
    type();
}

// Dark/Light mode toggle
function toggleDarkMode() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.backgroundColor = '#333';
        });
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.backgroundColor = '#f0f0f0';
        });
    }
}

// Smooth scrolling effect
function smoothScrollTo(element) {
    element.scrollIntoView({ behavior: 'smooth' });
}

// Call the bubble generation function
startBubbles();

// Add typing effect to the introduction text
const introText = "Hello, I'm Bryl John! I'm just a normal person who’s passionate about learning and growing. While I may not be a coding expert yet, I’m eager to improve and continuously expand my knowledge. This portfolio represents my journey in tech, and I’m open to exploring new challenges!";
const introElement = document.querySelector('article p');
typeWriterEffect(introElement, introText, 50); // Speed: 50ms per character

// Add event listener for dark mode toggle button
const darkModeButton = document.createElement('button');
darkModeButton.textContent = "Toggle Dark/Light Mode";
darkModeButton.style.position = 'fixed';
darkModeButton.style.bottom = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.padding = '10px 20px';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.backgroundColor = '#007bff';
darkModeButton.style.color = 'white';
darkModeButton.style.border = 'none';
darkModeButton.style.borderRadius = '5px';
darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);

// Optional: Smooth scroll to sections when clicking buttons (add this functionality to your HTML buttons)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => smoothScrollTo(document.querySelector('details')));
});
