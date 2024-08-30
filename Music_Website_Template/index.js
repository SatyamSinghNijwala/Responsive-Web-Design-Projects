let audio = document.querySelector("audio");
let sticker = document.querySelector("#sticker2");

audio.addEventListener("ended",function(){
    sticker.src="sticker2.webp";
})

sticker.addEventListener("click", function (e) {
    if (audio.paused) {
        audio.play();
        sticker.src = "sticker3.webp";
    }
    else {
        audio.pause();
        sticker.src = "sticker2.webp";
    }
});