const button = document.querySelector('#playBtn');
const nextBtn = document.querySelector('#nextBtn');

//Playlist array
var files = [
    "client/src/audio/heavn-jamila-woods.mp3",
    "client/src/audio/pink+white.mp3"
];

var i = 0;

var music = document.querySelector("#playBtn audio");

music.src = files[i];

function next() {
    if (i === files.length - 1) {
        i = 0;
    } else {
        i++;
    }

    music.src = files[i];

    playSound();
};


function playSound() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
};

music.addEventListener('ended', next);

button.addEventListener('click', playSound);
button.addEventListener('click', function() {
    console.log('Play/Pause was clicked!');
});

nextBtn.addEventListener('click', next);
nextBtn.addEventListener('click', function() {
    console.log('Next was clicked!');
});