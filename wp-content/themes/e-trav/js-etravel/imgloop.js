const imgArray = ['ressources-etravel/pinkchild.png','ressources-etravel/purplechild.png','ressources-etravel/yellowchild.png','ressources-etravel/bluechild.png','ressources-etravel/greenchild.png','ressources-etravel/redchild.png','ressources-etravel/orangechild.png','ressources-etravel/greychild.png','ressources-etravel/blackchild.png'];

counter = 0
const setImage = () => {
 document.querySelector("#imgloop").src = imgArray[counter];
 counter = (counter+1) % imgArray.length;
}

setInterval(setImage, 1500);

let i = 0;
function colorchange() {
  let doc =  document.querySelector(".front-page-title");
  let color = ["#FFB0B0","#C9B4FC", "#FFEC7D", "#9FC2FF", "#9CFFA3", "red", "#FFC392", "#D3D3D3", "black"];
  doc.style['-webkit-text-stroke-color'] = color[i];
  i = (i + 1) % color.length;
}
setInterval(colorchange, 1500);
