const smallBox = document.querySelector(".small-box");
const bigBox = document.querySelector(".big-box");

smallBox.addEventListener("dragstart", function(e) {

});

bigBox.addEventListener("dragover", function(e) {
  e.preventDefault();
})

bigBox.addEventListener("drop", function(e) {
  bigBox.appendChild(smallBox)
})

