let audio = document.querySelector("audio");
let sticker = document.querySelector("#sticker2");

sticker.addEventListener("click",function(e){
    if(audio.paused){
        audio.play();
        sticker.src="sticker3.webp";
        if(audio.ended){
            sticker.src="sticker2.webp";
        }
    }
    else{
        audio.pause();
        sticker.src="sticker2.webp";
    }
});