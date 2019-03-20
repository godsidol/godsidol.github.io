
var fixedCardSet = false;
let fixedCards = document.querySelectorAll(".fixed-card");
var snapContainer = document.querySelector(".snap-scroll-container");

snapContainer.addEventListener("scroll", function(e){
    fixedCards.forEach(function(card, i){
        if(card.matches(":hover")){
            setTimeout(function(){
                window.requestAnimationFrame(function() {
                    card.classList.add("final");
                });
            }, 1000 * i);
        }
    });
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}