let asciiCode = document.getElementById("keyCode")
let eventKey = document.getElementById("key")
let eventLocation = document.getElementById("location")
let eventWhich = document.getElementById("which")
let eventCode = document.getElementById("code")
let heading = document.getElementById("heading")
let asciiDiv = document.getElementById("ascii")
let infosDiv = document.getElementById("infos")
let starterSection = document.getElementById("starter")

document.body.addEventListener('keydown', function (event) {
    event.preventDefault();
    asciiCode.innerHTML = event.keyCode;
    if (event.key === " ") {
        eventKey.innerHTML = '(blank space)';
    } else {
        eventKey.innerHTML = event.key;
    }
    eventLocation.innerHTML = event.location;
    eventWhich.innerHTML = event.which;
    eventCode.innerHTML = event.code;
    heading.style.display = 'flex';
    asciiDiv.style.display = 'flex';
    infosDiv.style.display = 'flex';
    starterSection.style.display = 'none';
})

