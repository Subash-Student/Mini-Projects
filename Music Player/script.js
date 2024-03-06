let progress = document.getElementById("progras");
let song = document.getElementById("song");
let cntrl = document.getElementById("ctrl");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});

function playPause() {
    if (cntrl.classList.contains("fa-play")) {
        song.pause();
        cntrl.classList.remove("fa-play");
        cntrl.classList.add("fa-pause");
    } else {
        song.play();
        cntrl.classList.remove("fa-pause");
        cntrl.classList.add("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    cntrl.classList.remove("fa-pause");
    cntrl.classList.add("fa-play")
}


