// Typed.js for dynamic text
new Typed('#dynamic-text', {
    strings: ["Welcome to my portfolio website!", "I am a Web Developer", "Let's create something amazing!"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Modal functionality
function openModal(projectId) {
    alert(`Details about ${projectId}`); // Replace with actual modal logic
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("dynamic-text2").style.display = "block";
    }, 2000); // 2 seconds delay

    setTimeout(function() {
        document.getElementById("dynamic-text3").style.display = "block";
    }, 4000); // 4 seconds delay
});
