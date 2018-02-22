// JavaScript Document
//form.js

/*Variable for main package form*/
var TotalForm = document.getElementById("fullForm");

/*Creates function to give feedback depending on choice.*/
var packageSelection = document.getElementById("selection");
var packageHint = document.getElementById("choiceResponse");
function respondToPackage()
{
	var pack = this.options[this.selectedIndex].value;
	switch(pack)
	{
	case "2W":
		packageHint.innerHTML = "You get what you pay for.";
		break;
	case "3M":
		packageHint.innerHTML = "Nice choice.";
		break;
	case "2Y":
		packageHint.innerHTML = "Full Security at Your Commands.";
		break;
	default:
		packageHint.innerHTML = " ";
		break;
	}
}
packageSelection.addEventListener("change", respondToPackage, false);


//Change class of theNextButton when mouse hovers over it.
var originalButtonState = document.getElementById("button1");
originalButtonState.className = "theNextButton";
function changeClass()
{
	var elButton = document.getElementsByTagName("button")[0];
	elButton.className = "nextButtonOnHover";
}
function changeBackClass()
{
	var elButton2 = document.getElementsByTagName("button")[0];
	elButton2.className = "theNextButton"
}
var NextButton = document.getElementById("button1");
NextButton.addEventListener("mouseover", changeClass, false);
NextButton.addEventListener("mouseout", changeBackClass, false);

//Creates Social Network Links
var facebookLink = document.createElement("IMG");
facebookLink.setAttribute("src", "facebookLogo.png");
facebookLink.setAttribute("width", "30px");
var firstDiv = document.getElementById("link1");
firstDiv.appendChild(facebookLink);

var instagramLink = document.createElement("IMG");
instagramLink.setAttribute("src", "instagramLogo.png");
instagramLink.setAttribute("width", "30px");
var secondDiv = document.getElementById("link2");
secondDiv.appendChild(instagramLink);

var linkedInLink = document.createElement("IMG");
linkedInLink.setAttribute("src", "linkedInLogo.png");
linkedInLink.setAttribute("width", "30px");
var thirdDiv = document.getElementById("link3");
thirdDiv.appendChild(linkedInLink);


//If Checkbox isn't clicked, don't let user proceed.
var elTerms = document.getElementById("terms");
var elTermsHint = document.getElementById("termsHint");;
function checkTerms(event)
{
	if(!elTerms.checked)
	{
		elTermsHint.innerHTML = "You must agree to our shitty terms.";
		event.preventDefault();
	}
}
TotalForm.addEventListener("submit", checkTerms, false);



