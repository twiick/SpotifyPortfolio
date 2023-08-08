let albums=[
    {
        name:"1989",
        artist:"Taylor Swift",
        year:2014,
        cover:"https://lh3.googleusercontent.com/-jaWr9K7U0bJoqMv50tihlvf1QXe_y-dmvw_z_40gA9bPj4PhfRPobOdQndQIoCxsFDWRyEoP0Rben8=w544-h544-l90-rj",
        songs:[
            {title:"Welcome To New York",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:1,src:"Welcome To New York.mp3"},
            {title:"Blank Space",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:2,src:"Blank Space.mp3"},
            {title:"Style",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:3,src:"Style.mp3"},
            {title:"Out Of The Woods",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:4,src:"Out Of The Woods.mp3"},
            {title:"All You Had To Do Was Stay",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:5,src:"All You Had To Do Was Stay.mp3"},
            {title:"Shake It Off",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:6,src:"Shake It Off.mp3"},
            {title:"I Wish You Would",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:7,src:"I Wish You Would.mp3"},
            {title:"Bad Blood",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:8,src:"Bad Blood.mp3"},
            {title:"Wildest Dreams",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:9,src:"Wildest Dreams.mp3"},
            {title:"How You Get The Girl",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:10,src:"How You Get The Girl.mp3"},
            {title:"This Love",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:11,src:"This Love.mp3"},
            {title:"I Know Places",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:12,src:"I Know Places.mp3"},
            {title:"Clean",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:13,src:"Clean.mp3"},
            {title:"Wonderland",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:14,src:"Wonderland.mp3"},
            {title:"You Are In Love",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:15,src:"You Are In Love.mp3"},
            {title:"New Romantics",collaborators:"",cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",number:16,src:"New Romantics.mp3"}
        ]
    },
    {
        name:"Red (Taylor's Version)",
        artist:"Taylor Swift",
        year:2021,
        cover:"https://lh3.googleusercontent.com/d_T3L3Ed5ynZLMVs0Ely4aqTfBZ-y9P9azzlLuKvT2re1QQuxqTxRPoSv082zBOBWmXZZRZKqIFbR7YI=w544-h544-l90-rj",
        songs:[
            {title:"State Of Grace (Taylor's Version)",collaborators:"",number:1,src:"State Of Grace (Taylor's Version).mp3"},
            {title:"Red (Taylor's Version)",collaborators:"",number:2,src:"Red (Taylor's Version).mp3"},
        ]
    }
]
songContainer=document.getElementById('songs');
songsList="";
for(song in albums[0].songs){
    songsList=songsList + `<audio controls id="song${song}"><source src="./audios/${albums[0].songs[song].src}" type="audio/mpeg"></audio>`
}

songContainer.innerHTML=songsList;

// ----------------------
const likeIcon=document.getElementById("like-icon");
const shuffleIcon=document.getElementById("shuffle-icon");
const playButton=document.getElementById("play-button");
const playIcon=document.getElementById("play-icon");
const volumeIcon=document.getElementById("volume-icon");
const volumeInput=document.getElementById("volume-input");
const song2=document.getElementById("song2");
const songSlider=document.getElementById("song-slider")
let songTime=document.getElementById("song-time");
let songDuration=document.getElementById("song-duration");
let volume=20;

likeIcon.addEventListener("click",()=>{
    likeIcon.classList.toggle("like")
})

shuffleIcon.addEventListener("click",()=>{
    shuffleIcon.classList.toggle("shuffle")
})

playButton.addEventListener("click",()=>{
    if(playIcon.classList.contains("fa-play")==true){
        song2.play();
    }
    else{
        song2.pause()
    }
    playIcon.classList.toggle("fa-play");
    playIcon.classList.toggle("fa-pause");
    songSlider.max=parseInt(song2.duration)
    songDuration.innerText=segundosAFormatoTiempo(song2.duration)
})

volumeIcon.addEventListener("click",()=>{
    if(volumeInput.value==0){     
        volumeInput.value=volume
        if(volumeInput.value==0){
            replaceAudioIcon("fa-volume-off");
        }
        else if(volumeInput.value>0 &&volumeInput.value<0.6){
            replaceAudioIcon("fa-volume-low")
        }
        else{
            replaceAudioIcon("fa-volume-high")
        }
        song2.volume=volumeInput.value;
    }else{
        volume=volumeInput.value;
        replaceAudioIcon("fa-volume-off");
        volumeInput.value=0
        song2.volume=volumeInput.value;
    }
});

volumeInput.addEventListener("input",()=>{
    if(volumeInput.value==0){
        replaceAudioIcon("fa-volume-off");
    }
    else if(volumeInput.value>0 &&volumeInput.value<0.6){
        replaceAudioIcon("fa-volume-low")
    }
    else{
        replaceAudioIcon("fa-volume-high")
    }
    song2.volume=volumeInput.value;
})

function replaceAudioIcon(activeIcon){
    volumeIcon.classList.remove("fa-volume-off");
    volumeIcon.classList.remove("fa-volume-low");
    volumeIcon.classList.remove("fa-volume-high");  
    volumeIcon.classList.add(activeIcon);    
}

songSlider.addEventListener("input",()=>{
    song2.currentTime=songSlider.value
})

var intervalo = setInterval(()=>{
    songSlider.value=song2.currentTime
    songTime.innerText=segundosAFormatoTiempo(song2.currentTime)
}, 200);


function segundosAFormatoTiempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = Math.floor(segundos % 60);
  
    var formatoMinutos = minutos < 10 ? "0" + minutos : minutos;
    var formatoSegundos = segundosRestantes < 10 ? "0" + segundosRestantes : segundosRestantes;
  
    return formatoMinutos + ":" + formatoSegundos;
}