let getModalButton = document.getElementById("modalButton");
getModalButton.addEventListener("click", function() {
    document.getElementById("modalWindow").style.display = "flex";
});

let getCloseModalButton = document.getElementById("closeModal");
getCloseModalButton.addEventListener("click", function() {
    document.getElementById("modalWindow").style.display = "none";
})