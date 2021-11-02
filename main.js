let logo = document.querySelector('img');

logo.onclick = function () {
    let mySrc = logo.getAttribute('src');
    if (mySrc === "../Utah_Jazz/images/jazzlogo.png") {
        logo.setAttribute('src', "../Utah_Jazz/images/jazzlogo2.png");
    } else {
        logo.setAttribute('src', "../Utah_Jazz/images/jazzlogo.png");
    }
    // alert('it works')
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
let jazzRoster = document.querySelector('h3');

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
