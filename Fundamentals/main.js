let logo = document.querySelector('img');

logo.onclick = function () {
    let mySrc = logo.getAttribute('src');
    if (mySrc === '../images/jazzlogo2.png') {
        logo.setAttribute('src', '../images/jazzlogo.png');
    } else {
        logo.setAttribute('src', '../images/jazzlogo.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
let jazzRoster = document.querySelector('h3');


// function Clear() {
//     document.getElementsByClassName("form").reset();
// }

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
