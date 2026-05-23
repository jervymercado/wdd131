const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

navigation.classList.add("hide");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("hide");

    if (navigation.classList.contains("hide")) {
        menuButton.textContent = "☰";
    } else {
        menuButton.textContent = "X";
    }
});