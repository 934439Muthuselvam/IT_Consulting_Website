// script.js

function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("hidden");
}

// Optionally, you can add a click event listener to close the dropdown if clicked outside
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById("myDropdown");
    const button = document.querySelector('button');

    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});
