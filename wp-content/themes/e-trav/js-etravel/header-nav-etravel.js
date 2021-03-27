//Ouverture/fermenture du menu de navigation mobile

//Mobile Navigation
//Ouverture
document.querySelector("#openNav").onclick =
    function() {
        document.querySelector("#myNav").style.height = "100%";

        document.body.classList.toggle('lock-scroll');
    };

//Fermeture
document.querySelector("#closeNav").onclick =
    function() {
        document.querySelector("#myNav").style.height = "0%";

        document.body.classList.toggle('lock-scroll');
    };
