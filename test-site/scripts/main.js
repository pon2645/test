var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	  let myName = prompt('Please enter your name.');
	  if(!myName || myName === null) {
	    setUserName();
	  } else {
	    localStorage.setItem('name', myName);
	    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
	  }
	}

if(!localStorage.getItem('name')) {
	  setUserName();
	} else {
	  var storedName = localStorage.getItem('name');
	  myHeading.textContent = 'Mozilla はすばらしいよ、' + storedName;
	}

myButton.onclick = function() {
	  setUserName();
	}