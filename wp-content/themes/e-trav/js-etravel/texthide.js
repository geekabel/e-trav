
  let btn = document.querySelector("button")
  let elem = document.querySelector(".text");
  let height = elem.clientHeight;

  elem.style.height = height + "0px";
  elem.style.visibility = "hidden";
  elem.style.padding =  "0px";

  btn.addEventListener('click', function hide(){
    if (elem.style.visibility == "hidden") {
      elem.style.visibility = "visible";
      elem.style.height = height + "133px";
      elem.style.padding = "0";
      elem.style.marginBottom = "0px";
    } else {
      elem.style.visibility = "hidden";
      elem.style.height = "0";
      elem.style.padding = "0";
      elem.style.marginBottom = "20px";
    }
  });
