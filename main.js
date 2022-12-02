var newFamCounter = 1;
var bioFam = document.getElementById("bio-fam")
var chosenFam = document.getElementById("chosen-fam")
var myButton1 = document.getElementById("my-button")
var myButton2 = document.getElementById("my-button2")
var firstHeadline = document.getElementById("first-headline")
var secondHeadLine = document.getElementById("second-headline")
// var listFamily = document.getElementById("bio-fam").getElementsByTagName("li");


// for (i = 0; i < listFamily.length; i++) {
//     listFamily[i].addEventListener("click" , activateFam);
// }

bioFam.addEventListener("click" , activateBioFam);

function activateBioFam(e) {
    if (e.target.nodeName == "LI") {
        firstHeadline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
}

chosenFam.addEventListener("click" , activateChosenFam);

function activateChosenFam(e) {
    if (e.target.nodeName == "LI") {
        secondHeadLine.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
}

// button for bio fam
myButton1.addEventListener("click" , addNewFam );
function addNewFam() {
    bioFam.innerHTML += "<li> New Person " + newFamCounter +  "</li>"; 
    newFamCounter++; 
}
// button for chosen  fam
myButton2.addEventListener("click" , addNewFam2 );
function addNewFam2() {
    chosenFam.innerHTML += "<li> New Person " + newFamCounter +  "</li>"; 
    newFamCounter++; 
}