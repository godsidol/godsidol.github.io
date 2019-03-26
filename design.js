
var fixedCardSet = false;
let fixedCards = document.querySelectorAll(".fixed-card");
var snapContainer = document.querySelector(".snap-scroll-container");
var unorderedList = document.querySelectorAll("ul");

var videoSections = document.querySelectorAll("video");

snapContainer.addEventListener("scroll", function(e){
    fixedCards.forEach(function(card, i){
        if(card.matches(":hover")){
            setTimeout(function(){
                window.requestAnimationFrame(function() {
                    card.classList.add("final");
                    
                    var ul = card.querySelector("ul");
                    ul.classList.add("list-final");
                });
            }, 1000 * i);
        }
    });
});

videoSections.forEach(function(video, i){
    video.addEventListener("mouseenter", function(){
        if (video.paused) {
            playVideo(video);
        }
    });
});

async function playVideo(video) {
    try {
      await video.play();
    } catch(err) {
      console.log(err);
    }
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}