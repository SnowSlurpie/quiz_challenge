var takeQuizBtn = document.getElementById("start-quiz");
var clearScoresBtn = document.getElementById("clear-scores");
var highScoresObj = localStorage.getItem("JSQuizHighScores");
var highScores = document.getElementById("answers");



function getHighScores() {
    if (!highScoresObj) {
        return;
    }
    highScoresObj = JSON.parse(highScoresObj);
    var initials = highScoresObj.initials;
    var scores = highScoresObj.score;
    for (var i = 0; i < initials.length; i++) {
    var listing = document.createElement("div");
    var listingCount = i + 1
    listing.innerText = `${listingCount}) ${initials[i]} - ${scores[i]}`;
    // var initialsListing = document.createElement("span");
    // var scoreListing = document.createElement("span");
    // initialsListing.innerText = initials[i];
    // scoreListing.innerText = scores[i];
    // listing.appendChild(initialsListing);
    // listing.appendChild(scoreListing);
    highScores.appendChild(listing);
    }

}

function takeQuiz() {
    location.assign("index.html");
};

function clearScores() {
    highScores.remove();
    localStorage.clear();
};


getHighScores();
takeQuizBtn.addEventListener("click", takeQuiz);
clearScoresBtn.addEventListener("click", clearScores);