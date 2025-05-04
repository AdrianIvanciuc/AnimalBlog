let bool = 0;
function sidebar() {
    if (bool == 0) {
        document.getElementById("sidebar").style.width = "15vw";
        document.getElementById("main").style.marginLeft = "15vw";
        document.querySelector("footer").style.marginLeft = "15vw";
        bool = 1;
    }
    else {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.querySelector("footer").style.marginLeft = "0";
        bool = 0;
    }
}