const button=document.getElementById("Event");
const heading=document.getElementById("heading");
button.addEventListener("click",() => {
heading.textContent ="button clicked";
heading.style.color ="Gray";
});