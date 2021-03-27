const imgCupArray = ['ressources-etravel/pinkchildcup.png','ressources-etravel/purplechildcup.png','ressources-etravel/yellowchildcup.png','ressources-etravel/bluechildcup.png','ressources-etravel/greenchildcup.png','ressources-etravel/redchildcup.png','ressources-etravel/orangechildcup.png','ressources-etravel/greychildcup.png','ressources-etravel/blackchildcup.png'];

cupCounter = 0
const setImageCup = () => {
 document.querySelector("#imgloopcup").src = imgCupArray[cupCounter];
 cupCounter = (cupCounter+1) % imgCupArray.length;
}

setInterval(setImageCup, 1500);
