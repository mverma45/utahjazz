let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../Images/jazzlogo.png') {
        myImage.setAttribute('src', '../Images/jazzlogo2.png');
    } else {
        myImage.setAttribute('src', '../Images/jazzlogo.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
let jazzRoster = document.querySelector('h3');


function Instruct() {
    alert("Click the logo to change the logo, Click 'Change Name' and type your name");
}

function SetUserName() {
    let myName = prompt('Please enter your name?');
    if (!myName) {
        SetUserName();
    } 
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    SetUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Welcome, ' + storedName;
}
myButton.onclick = function () {
    SetUserName();
}

//Roster
// function roster() {
//     alert("Utah Jazz 2021-2022 Roster")
// }