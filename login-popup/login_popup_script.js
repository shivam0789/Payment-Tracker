let popUp = document.getElementById("pop-up");
let btn = document.querySelector(".btn");
let closeButton = document.querySelector(".close-button")

function toggleModal() {
    popUp.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === popUp) {
        toggleModal();
    }
}

btn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);