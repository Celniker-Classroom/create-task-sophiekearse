// add javascript here
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

   
var songs = [
    { title: "Dumb", artist: "Nirvana", genre: "Grunge" },
    { title: "On Melancholy Hill", artist: "Gorillaz", genre: "Synth Pop" },
    { title: "Strawberry Fields Forever", artist: "The Beatles", genre: "Rock" },
    { title: "Layla", artist: "Derek and the Dominos", genre: "Rock" },
]

document.getElementById("submit").addEventListener("click", function() {

    let score = calculateScore(8);
    document.getElementById("score").style.display = "block";
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


    
    