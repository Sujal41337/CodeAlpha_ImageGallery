function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = src;
  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
