let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

// CONFIG PARAM
let countItem = items.length;
let itemActive = 0;
// EVENT NEXT CLICK
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//EVENT PREV CLICK
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
//AUTO RUN SLIDER
let refreshInterval = setInterval(() => {
  next.click();
}, 6000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("acticve");
  thumbnailActiveOld.classList.remove("active");

  //ACTIVE NEW ITEM
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  //CLEAR AUTO TIME RUN SLIDER
  clearInterval(refreshInterval);
  let refreshInterval = setInterval(() => {
    next.click();
  }, 6000);
}

// CLICK THUMBNAIL
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
