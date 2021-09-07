const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
const circles = document.querySelectorAll(".circle");

let currActive = 1;

const update = function () {
    circles.forEach((circle, i) => {
        if (i < currActive) circle.classList.add("active");
        else circle.classList.remove("active");
    });

    const activeCircles = document.querySelectorAll(".active");
    progress.style.width =
        ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currActive === 1) {
        prev.disabled = true;
        submit.style.display = "none";
    } else if (currActive === circles.length) {
        next.disabled = true;
        submit.style.display = "grid";
    } else {
        prev.disabled = false;
        next.disabled = false;
        submit.style.display = "none";
    }
};

next.addEventListener("click", () => {
    currActive++;
    if (currActive > circles.length) {
        currActive = circles.length;
    }
    update();
});
prev.addEventListener("click", () => {
    currActive--;
    if (currActive < 1) {
        currActive = 1;
    }
    update();
});
