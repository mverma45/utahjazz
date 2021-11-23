let jlogo = true;
const logo = document.querySelector('#basketball')

logo.onclick = function () {

    let basketball
    
    if (basketball != this.querySelector) {
        document.querySelector('./images/jazzlogo2.png')
    }
    else {
        document.querySelector('./images/jazzlogo.png')
    }
    const basketball = jlogo ? "jazzlogo2" : "jazzlogo"
    logo.setAttribute('src', `./images/${basketball}.png`);

    jlogo = !jlogo
    
    let mySrc = logo.getAttribute('src');
    if (mySrc === './images/jazzlogo2.png') {
        newImage.setAttribute('src', './images/jazzlogo.png');
    } else {
        newImage.setAttribute('src', './images/jazzlogo2.png')
    }
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
