// basic setup
let currentQuestion = 1;
const totalQuestions = 8;
document.getElementById("restart").style.display = 'none';
document.getElementById("nextBtn").style.display = 'none';
document.getElementById("q1").style.display = 'none';


// Hide all other questions initially
for (let i = 2; i <= totalQuestions; i++) {
    document.getElementById(`q${i}`).style.display = 'none';
}
document.getElementById("submit").style.display = 'none';
document.getElementById("result").style.display = 'none';



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

//sets up first question after user clicks start button, and shows next button to move through quiz
document.getElementById("startBtn").addEventListener("click", function() {
    if (document.getElementById("name").value.trim() === "") {
        alert("Please enter your name before starting the quiz.");
        return;
    }   
    else {
    
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("q1").style.display = 'block';
    document.getElementById("start").style.display = 'none';
    }
});


// Function provided by inline AI text generator, I asked it to help me set up the next button to move through the quiz, and to check if a radio button for the current question is checked before allowing user to move to next question. If no radio button is checked, an alert will pop up asking user to select an answer before proceeding to next question.
document.querySelectorAll('.nextBtn').forEach(btn => {
    btn.addEventListener('click', function() {
       

        // Check if a radio button for the current question is checked
        if (!document.querySelector(`input[name="group${currentQuestion}"]:checked`)) {
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
    

//final result
let name = document.getElementById("name").value;
let names = name.toUpperCase();

    document.getElementById("song").textContent = names + " your song recommendation is: " +songs[songIndex].title + " -- " + songs[songIndex].artist + 
    " (" + songs[songIndex].genre + ")";
    document.getElementById("submit").style.display = "none";
    document.getElementById("restart").style.display = "block";


    }
);


//restart button so user can retry quiz
document.getElementById("restart").addEventListener("click", function() {
    currentQuestion = 1;
    document.getElementById("restart").style.display = 'none';
    document.getElementById("nextBtn").style.display = 'block';
    document.getElementById("q1").style.display = 'block';
    document.getElementById("result").style.display = 'none';
    // Hide all other questions
    for (let i = 2; i <= totalQuestions; i++) {
        document.getElementById(`q${i}`).style.display = 'none';
    }
    // Uncheck all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
}); 


    
    document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    text = document.getElementById("darkModeBtn").textContent;
    if (text === "Dark Mode") {
        document.getElementById("darkModeBtn").textContent = "Light Mode";
    } else {
        document.getElementById("darkModeBtn").textContent = "Dark Mode";
    }

});