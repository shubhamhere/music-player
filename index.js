//song info
const music = [
    {
        musicName : "Mood",
        artistName : "24kGoldn",
        musicSrc : "https://pagalworldsongs.me/dl/download.php?id=72720&kbps=320kbps",
        musicPoster : "https://pagalworldsongs.me/images/mood-72720.jpg"
    },
    // {
    //     musicName : "Say my name",
    //     artistName : "Kr$na",
    //     musicSrc : "http://mp3.vlcmusic.com/mp3/org/32328.mp3",
    //     musicPoster : "https://mp3.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/32328.png"
    // },
    // {
    //     musicName : "Maakasam",
    //     artistName : "Kr$na",
    //     musicSrc : "http://mp3.vlcmusic.com/mp3/org/26564.mp3",
    //     musicPoster : "https://mp3.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/26564.png"
    // },
    {
        musicName : "Saath ya khilaaf",
        artistName : "Raftaar x Kr$na",
        musicSrc : "https://pagalworldsongs.me/dl/download.php?id=72731&kbps=320kbps",
        musicPoster : "https://pagalworldsongs.me/images/saath-ya-khilaaf-72731.jpg"
    }
    ,{
        musicName : "Tu Phir Se Aana",
        artistName : "Raftaar x Salim Merchant x Karma",
        musicSrc : "http://mp3.vlcmusic.com/mp3/org/34213.mp3",
        musicPoster : "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
    },
    {
        musicName : "Naachne Ka Shaunq",
        artistName : "Raftaar x Brobha V",
        musicSrc : "http://mp3.vlcmusic.com/mp3/org/27144.mp3",
        musicPoster : "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
    },
    {
        musicName : "Mantoiyat",
        artistName : "Raftaar x Nawazuddin Siddiqui",
        musicSrc : "http://mp3.vlcmusic.com/mp3/org/14448.mp3",
        musicPoster : "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
    },
    {
        musicName : "Aage Chal",
        artistName : "Raftaar",
        musicSrc : "http://mp3.vlcmusic.com/mp3/org/25791.mp3",
        musicPoster : "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
    },
    {
        musicName : "Damn",
        artistName : "Raftaar x kr$na",
        musicSrc : "http://mp3.vlcmusic.com/mp3/org/26867.mp3",
        musicPoster : "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg"
    },
    {
        musicName : "Feeling You",
        artistName : "Raftaar x Harjas",
        musicSrc : "http://mp3.vlcmusic.com/mp3/org/27145.mp3",
        musicPoster : "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
    }
];


let musicIndex = 0;
const audio = document.querySelector("#audio");
const prevBtn = document.querySelector("#backward-btn");
const playBtn = document.querySelector("#play-pause-btn");
const nextBtn = document.querySelector("#forward-btn");
const musicName = document.querySelector("#song-name");
const artistName = document.querySelector("#artist-name");
const musicPoster = document.querySelector(".music-poster");
const musicPosterBoxContainer = document.querySelector(".music-poster-box-container");

let isPlaying = false;
function currentMusic(index){
    if(index>=music.length){
        index = index%music.length;
    }
    if(index<0){
        index = music.length + index%music.length;
    }
    musicIndex = index;
    musicPosterBoxContainer.innerHTML = "";
    musicPosterBoxContainer.style.left=0+"%";
    musicPosterBoxContainer.style.left = -250*index+"px";
    audio.src=music[index].musicSrc;
    musicName.innerText=music[index].musicName;
    artistName.innerText=music[index].artistName;
    musicPoster.src = music[index].musicPoster;
    musicPoster.alt = music[index].musicName;
    let list = document.querySelector(".list");
    list.innerHTML="";

    music.forEach((item,index)=>{
        let musicPosterBox = document.createElement("img");
        musicPosterBox.classList.add("music-poster-box");
        musicPosterBox.src=music[index].musicPoster;
        musicPosterBoxContainer.appendChild(musicPosterBox);
        if (index == musicIndex) {
            musicPosterBox.classList.add("current");
        }
        else {
            musicPosterBox.classList.remove("current");
        }
        //music list
        let musicItem = document.createElement("div");
        musicItem.classList.add("music");
        //series
        let serise = document.createElement("span");
        serise.classList.add("series");
        serise.innerText=index+1 +".";
        musicItem.appendChild(serise);
        //name
        let name = document.createElement("span");
        name.classList.add("music-name");
        name.innerText=music[index].musicName;
        musicItem.appendChild(name);
        //bars
        const bars = "<span class='bar n1'></span><span class='bar n2'></span><span class='bar n3'></span>";
        let playing = document.createElement("div");
        playing.classList.add("now");
        if(index==musicIndex){
            playing.classList.add("playing");
        }
        else{
            playing.classList.remove("playing");
        }
        playing.innerHTML=bars;
        musicItem.appendChild(playing);
        list.appendChild(musicItem);
    });
}

playBtn.addEventListener('click', ()=> {
    isPlaying?pauseMusic():playMusic();
});

nextBtn.addEventListener("click",()=>{
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
});

prevBtn.addEventListener("click",()=>{
    musicIndex = musicIndex - 1;
    currentMusic(musicIndex);
    playMusic();
});

currentMusic(musicIndex);

function playMusic(){
    isPlaying=true;
    audio.play();//using javascript functions
    playBtn.classList.replace("fa-play-circle","fa-pause-circle-o");
}

function pauseMusic(){
    isPlaying=false;
    audio.pause();
    playBtn.classList.replace("fa-pause-circle-o","fa-play-circle");
}

// music time ..song bar-----------------------------------------------
const current = document.querySelector("#music-current");
const duration = document.querySelector("#music-duration");
if(duration.innerText=="NaN:0NaN"){
    duration.innerText="";
}

audio.addEventListener("timeupdate",()=>{
    let time = audio.currentTime;
    let seconds = Math.floor(time%60);
    let minutes = Math.floor(time/60);
    if(minutes<10 &&  seconds<10 ){
        current.innerText="0"+minutes+":0"+seconds;
    }
    else if(minutes<10){
        current.innerText="0"+minutes+":"+seconds;
    }
    else if(seconds<10){
        current.innerText=minutes+":0"+seconds;
    }
    else{
        current.innerText=minutes+":0"+seconds;
    }

    //duration time=----------------------------
    time = audio.duration;//we are using duration function of audio to get full audio time
    seconds = Math.floor(time%60);
    minutes = Math.floor(time/60);
    if(minutes<10 &&  seconds<10 ){
        duration.innerText="0"+minutes+":0"+seconds;
    }
    else if(minutes<10){
        duration.innerText="0"+minutes+":"+seconds;
    }
    else if(seconds<10){
        duration.innerText=minutes+":0"+seconds;
    }
    else if(minutes>=0 && seconds >=0){
        duration.innerText=minutes+":"+seconds;
    }
    else{
        duration.innerText="00:00";
    }

    // time bar------------------------------------
    const timebarCicle = document.querySelector(".timebar-circle");
    const timebar = document.querySelector(".timebar");
    
    timebar.style.width=(audio.currentTime/audio.duration)*100 +"%";
    timebarCicle.style.left=(audio.currentTime/audio.duration)*100 +"%";


    if(audio.currentTime==audio.duration){
        musicIndex = musicIndex + 1;
        currentMusic(musicIndex);
        playMusic();
    }

});
//clicking any part in soundar--------------
const musicTimebar = document.querySelector(".music-timebar");
musicTimebar.addEventListener("click",(e)=>{
    let a = e.offsetX;
    let b = e.srcElement.clientWidth;
    audio.currentTime= a/b*audio.duration;
    console.log('audio.currenTime');
    
});



//music list open-----------------
const menuBtn = document.querySelector(".menu-btn");
const musicList = document.querySelector(".music-list");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click",()=>{
    musicList.classList.add("open");
});

closeBtn.addEventListener("click",()=>{
    musicList.classList.remove("open");
});



// swap left right 

// const playerCenter = document.querySelector(".poster");
// let manager = new Hammer.Manager(playerCenter);

// // Create a recognizer
// let Swipe = new Hammer.Swipe();

// manager.add(Swipe);

// manager.on('swipe', function (e) {
//     let direction = e.offsetDirection;
//     if (direction == 4) {
//         musicIndex = musicIndex - 1;
//         currentMusic(musicIndex);
//         playMusic();
//     }
//     else if (direction == 2){
//         musicIndex = musicIndex + 1;
//         currentMusic(musicIndex);
//         playMusic();
//     }
// });