
var fixedCardSet = false;
var lastKnowScrollPosition;
var fixedCard = document.querySelector(".fixed-card");

window.addEventListener("scroll", function(){
    if (!fixedCardSet) {
      window.requestAnimationFrame(function() {
        fixedCard.classList.add("final");
        fixedCardSet = false;
      });
  
      fixedCardSet = true;
    }
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}