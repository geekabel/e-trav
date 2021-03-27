let i = 0;
function colorchange() {
  let doc =  document.querySelector(".front-page-title");
  let color = ["#C9B4FC", "#FFEC7D", "#9FC2FF", "#9CFFA3", "red", "#FFC392", "#D3D3D3", "#999999"];
  doc.style['-webkit-text-stroke-color'] = color[i];
  i = (i + 1) % color.length;

}
setInterval(colorchange, 500);
