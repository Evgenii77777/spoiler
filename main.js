const listItems = document.querySelectorAll(".item-wrapper");

function handleToggleClass(e) {
  e.currentTarget.nextElementSibling.classList.toggle("spoiler-text");
  e.currentTarget.childNodes[1].classList.toggle("item-title__active");
  e.currentTarget.childNodes[3].classList.toggle("item-btn__active");
}

listItems.forEach(function (item) {
  item.addEventListener("click", handleToggleClass);
});
