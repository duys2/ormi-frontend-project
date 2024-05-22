let open = document.querySelector(".modal-open");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close-modal");

open.onclick = function () {
    modal.classList.add("active");
}

close.onclick = function () {
    modal.classList.remove("active");
}