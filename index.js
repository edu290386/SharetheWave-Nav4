const iconMenuElement = document.getElementById("toogle-menu");
const navBarElement = document.getElementById("nav-bar");

console.log(iconMenuElement)
console.log(navBarElement)

iconMenuElement.addEventListener('click', () => {
    navBarElement.classList.toggle("show-menu")
});

console.log(navBarElement);
