function addClass(color) {
  document.querySelector(".order-color").classList.add(color);
  //document.querySelector("changer le selecteur").classList.add(color-light);

  //La fonction cible la classe .order-color puis ajoute la classe .color a .order-color qui est parametrée dynamiquement avec le contenu de la variable bgColor//
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM entièrement chargé et analysé");

  const queryString = window.location.search;
  /*.location récupere l"url puis .search récupere les paramétres de l"url defini par le "?" inclu (?background-color=pink)*/

  const urlParams = new URLSearchParams(queryString);

  /*new instancie la classe URLSearchParams qui contient plusieurs parametres (attribut) pour interargir avec l'url dont la methode .has (voir doc URLSearchParams)*/

  const urlCheck = urlParams.has("background-color");
  /*verification si le parametre existe via .has qui renvoie un booléen (true, false)*/

  let bgColor = "red";
  /*initialisation de la variable pour sortir la valeur de background-color du bloc if (valeur par defaut pink)*/

  if (urlCheck) {
    bgColor = urlParams.get("background-color");
    /*obtention du parametre de background-color (pink) via la methode .get de urlParams*/
  }
  addClass(bgColor);
  /*Appelle de la fonction addClass est réecriture du parametre de la fonction avec la variable bgColor*/
});
