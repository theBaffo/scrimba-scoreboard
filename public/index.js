let homeScore = 0;
let guestScore = 0;

const scoreTextHome = document.getElementById("score-text-home")
const scoreTextGuest = document.getElementById("score-text-guest")

function addToHomeScore(points) {
    homeScore += points
    
    scoreTextHome.textContent = homeScore
}

function addToGuestScore(points) {
    guestScore += points
    
    scoreTextGuest.textContent = guestScore
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    
    scoreTextHome.innerText = 0
    scoreTextGuest.innerText = 0
}
