//Funcionalidad Dulce o truco
let main = document.getElementById("main");
let buttonDulceOTruco = document.getElementById("buttondulceotruco");
let imgDulceOTruco = document.getElementById("imgdulceotruco");
buttonDulceOTruco.onclick = showImgDulceOTruco;
function showImgDulceOTruco(){
    main.className = "hide";
    imgDulceOTruco.className = "cover-fullscreen";
}

//compartida gato y yo
let buttonShowGato = document.getElementById("buttonshowgato");
let imgGato = document.getElementById("imggato");
let buttonKissGato = document.getElementById("buttonkissgato");
buttonShowGato.onclick = showImgGato;
function showImgGato(){
    buttonShowGato.className = "hide";
    imgGato.className = "imggato";
    buttonKissGato.className = "button";
}

//Funcionalidad Besar

let sectionGato = document.getElementById("sectiongato");
buttonKissGato.onclick = giveKiss;
function giveKiss(){
    let newKiss = document.createElement("img");
    newKiss.src = "kiss.png";
    newKiss.alt = "A kiss for the image UwU";
    newKiss.className = "kiss";
    let top = getRandomTopOrLeft(imgGato.height-100);
    let left = getRandomTopOrLeft(imgGato.width-100);
    newKiss.style.top = top;
    newKiss.style.left = left;
    sectionGato.appendChild(newKiss);
}

function getRandomTopOrLeft(dimension){
    return String(getRandomIntInclusive(0, dimension)) + "px";
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}