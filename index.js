const houseImg = document.getElementById("house-img");
const imageArray = [
  "https://i.imgur.com/hjqkSEy.png",
  "https://i.imgur.com/WLYG8Ae.png",
  "https://i.imgur.com/faVkiXs.png",
];
let index = 0;

setInterval(function () {
  index++;
  index %= imageArray.length;
  houseImg.setAttribute("src", imageArray[index]);
}, 3000);
