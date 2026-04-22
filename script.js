// add javascript here
let currentQuestion = 1;
const totalQuestions = 8;

document.getElementById("nextBtn").hidden = true;
document.getElementById(`q${currentQuestion}`).hidden = true;
//function to calculate score of game
function calculateScore(numQuestions) {
    let total = 0;
    for (let i = 1; i <= numQuestions; i++) {
        let selected = document.querySelector(`input[name="group${i}"]:checked`);
        if (selected) {
            total += Number(selected.value);
        }
    }
    return total;
}

// list that stores songs that will be recommended based on score of game
var songs = [
    { title: "Dumb", artist: "Nirvana", genre: "Grunge" },
    { title: "On Melancholy Hill", artist: "Gorillaz", genre: "Synth Pop" },
    { title: "Strawberry Fields Forever", artist: "The Beatles", genre: "Rock" },
    { title: "Layla", artist: "Derek and the Dominos", genre: "Rock" },
]
document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("nextBtn").hidden = false;
    document.getElementById(`q${currentQuestion}`).hidden = false;
});


// Function provided by inline AI text generator
document.querySelectorAll('.nextBtn').forEach(btn => {
    btn.addEventListener('click', function() {
       

        // Hide current question
        if (document.querySelector("input[type='radio']:checked") === false) {
            // Do nothing
            alert("Please select an answer before proceeding to the next question.");
            return;
        }
        
        document.getElementById(`q${currentQuestion}`).style.display = 'none';
        currentQuestion++;
        if (currentQuestion <= totalQuestions) {
            // Show next question
            document.getElementById(`q${currentQuestion}`).style.display = 'block';
        } else {
            // Show submit button
            document.getElementById('submit').style.display = 'block';
        }
        
    });
});

// once user clicks button, score is calculated and song recommendation is given based on score of game.
document.getElementById("submit").addEventListener("click", function() {

    let score = calculateScore(8);
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = "Your score is: " + score + "/8";
    let songIndex;
    if (score <= 2) {
        songIndex = 0;
    } else if (score <= 4) {
        songIndex = 1;
    } else if (score <= 6) {
        songIndex = 2;
    } else 
        songIndex = 3;
    

    document.getElementById("song").textContent = "Song recommendation: " +songs[songIndex].title + " -- " + songs[songIndex].artist + 
    " (" + songs[songIndex].genre + ")";

    }
);


    
    