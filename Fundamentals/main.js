let logo = document.querySelector('img');

logo.onclick = function () {
    let mySrc = logo.getAttribute('src');
    if (mySrc === "../Fundamentals/images/jazzlogo.png") {
        logo.setAttribute('src', "../Fundamentals/images/jazzlogo2.png");
    } else {
        logo.setAttribute('src', "../Fundamentals/images/jazzlogo.png");
    }
    // alert('it works')
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
        alert("Welcome to JazzNation, " + myName);
        myHeading.innerHTML = 'Welcome to JazzNation, ' + myName;
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
