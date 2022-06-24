// the function warning will runn when the page or the window is on load
window.onload = function warning(){
    alert("WARNING! \nThe website is not responsive in mobile devices or in small screen, I haven't made it yet. \nSo please open in full screen. Don't open it in half screen or lower");
}

var audio = new Audio ("audio/frédéric-chopin-nocturne-no.2-in-e-flat-op.9-no.2.mp3");

// function for play the music
function playMusic(){
    document.querySelector(".sound-button").style.color = "#11f05b";
    document.querySelector(".song-title").style.opacity = "0";
    document.querySelector(".song-title").style.transition = "0.5s";
    audio.play();
}

// when the 'sound button' or the <div> with class = sound got clicked, the icon colour change to green(#11f05b),
// the music title slowly dissapeared for 0.5 second, and the music played.
document.querySelector(".sound").addEventListener("click", playMusic);
