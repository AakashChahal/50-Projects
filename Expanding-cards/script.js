const cards = document.querySelectorAll(".panel");

cards.forEach((element) => {
    element.addEventListener("click", function () {
        document.querySelector(".active").classList.remove("active");
        element.classList.add("active");
    });
});
