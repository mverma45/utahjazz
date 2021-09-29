let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === '../../Programming/Projects/Fundamentals/Images/jazzlogo.png') {
        myImage.setAttribute('src', '../../Programming/Projects/Fundamentals/Images/jazzlogo2.png');
    } else {
        myImage.setAttribute('src', '../../Programming/Projects/Fundamentals/Images/jazzlogo.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

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
        myHeading.textContent = 'Welcome, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    SetUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function () {
    SetUserName();
}