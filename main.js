var newFamCounter = 1;
var bioFam = document.getElementById("bio-fam")
var myButton = document.getElementById("my-button")
var firstHeadline = document.getElementById("first-headline")
var listFamily = document.getElementById("bio-fam").getElementsByTagName("li");


// for (i = 0; i < listFamily.length; i++) {
//     listFamily[i].addEventListener("click" , activateFam);
// }

bioFam.addEventListener("click" , activateFam);

function activateFam(e) {
    if (e.target.nodeName == "LI") {
        firstHeadline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
    }
}

myButton.addEventListener("click" , addNewFam );

function addNewFam() {
    bioFam.innerHTML += "<li> New Person " + newFamCounter +  "</li>"; 
    newFamCounter++;

    
}

