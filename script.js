console.log("WELCOME TO SPOTIFY");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay  = document.getElementById('masterPlay'); // for playing music that copied from fontawe
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Salam-e-Ishq", filePath: "./songs/1.mp3" , coverPath: "cover1.jpg"},
    {songName: "Rubaro", filePath: "./songs/2.mp3" , coverPath: "cover2.jpg"},
    {songName: "Yeh Dil", filePath: "./songs/3.mp3" , coverPath: "cover3.jpg"},
    {songName: "Rubaaro", filePath: "./songs/4.mp3" , coverPath: "cover4.jpg"},
    {songName: "Dil chahta", filePath: "./songs/5.mp3" , coverPath: "cover5.jpg"},
    {songName: "Shokhiyon me", filePath: "./songs/6.mp3" , coverPath: "cover6.jpg"},
    {songName: "Sixty pence", filePath: "./songs/7.mp3" , coverPath: "cover7.jpg"},
    {songName: "Khwab ho tum", filePath: "./songs/8.mp3" , coverPath: "cover8.jpg"},
    {songName: "Mai zindagi", filePath: "./songs/9.mp3" , coverPath: "cover9.jpg"}, 
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 

});

// Handle play pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
});
//audioElement.play();
audioElement.addEventListener('timeupdate', () =>{
// update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100 );
myProgressBar.value = progress;

});

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})
const makeAllPlays = () => { 
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')       
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `${songindex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
});
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `${songindex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = `${songindex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

