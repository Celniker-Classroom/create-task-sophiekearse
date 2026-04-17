// add javascript here
// Track all user answers
let answers = [];

const radioButtons = document.querySelectorAll('input[type="radio"]');

// Handle question transitions
document.querySelectorAll('.submit').forEach(button => {
    button.addEventListener('click', function() {
        const questionDiv = this.closest('.question');
        const selected = questionDiv.querySelector('input[type="radio"]:checked');
        if (!selected) {
            alert('Please select an answer.');
            return;
        }
        
        // Store the selected answer value
        answers.push(parseInt(selected.value));
        
        questionDiv.style.display = 'none';
        const next = this.getAttribute('data-next');
        const nextQuestion = document.getElementById(next);
        if (nextQuestion) {
            nextQuestion.style.display = 'block';
            
            // If this is the last question, calculate score and show recommendation
            if (next === 'result') {
                calculateAndShowScore();
            }
        }
    });
});

//possible suggestions
const recommendedSongs = [
    {
        score: 0,
        genre: "pop",
        songs: [
            { title: "Choosin' Texas", artist: "Ella Langley" },
            { title: "Man I Need", artist: "Olivia Dean" },
            { title: "I Just Might", artist: "Bruno Mars"},
            { title: "Ordinary", artist: "Alex Warren" },
            { title: "Swim", artist: "BTS"},
            { title: "So Easy (To Fall in Love)", artist: "Olivia Dean"},
            { title: "Dracula", artist: "Tame Impala & JENNIE"},
            { title: "DTMF", artist: "Bad Bunny"},
            { title: "The Great Divide", artist: "Noah Kahan"},
            { title: "Stateside", artist: "PinkPatheress with Zara Larsson"},
        ]
    },
    {
        score: 1,
        genre: "rock",
        songs: [
            { title: "The Adults Are Talking", artist: "The Strokes" },
            { title: "Dumb", artist: "Nirvana"},
            { title: "Spectre", artist: "Radiohead"},
            { title: "Dance Yrself Clean", artist: "LCD Soundsystem"},
            { title: "Spiderwebs", artist: "No Doubt"},
            { title: "Black", artist: "Pearl Jam"},
            { title: "Let It Happen", artist: "Tame Impala"},
            { title: "All the Small Things", artist: "Blink-182"},
            { title: "On Melancholy Hill", artist: "Gorillaz"},
            { title: "In the End", artist: "Linkin Park"},
            { title: "Sister Europe", artist: "Foo Fighters"},
        ]
    },
    {
        score: 2,
        genre: "country",
        songs: [
            { title: "Choosin' Texas", artist: "Ella Langley" },
            { title: "I Got Better", artist: "Morgan Wallen"},
            { title: "I Remeber Everything", artist: "Zach Bryan, Kacey Musgraves"},
            { title: "Be By You", artist: "Luke Combs"},
            { title: "I Had Some Help", artist: "Post Malone, Morgan Wallen"},
            { title: "Be Her", artist: "Ella Langley"},
            { title: "Tennessee Whiskey", artist: "Chris Stapleton"},
            { title: "Plastic Cigarette", artist: "Zach Bryan"},
            { title: "Bloodline", artist: "Alx Warren, Jelly Roll"},
            { title: "Worst Way", artist: "Riley Green"},
        ],

        score: 3,
        genre: "hip hop/rap",
        songs: [
            { title: "Insecurities", artist: "Lil Baby"},
            { title: "Minks in Miami", artist: "Rick Ross, French Montana, Max B"},
            { title: "Like That", artist: "Future, Metro Boomin, Kendrick Lamar"},
            { title: "Father", artist: "Kanye West, Travis Scott"},
            { title: "forever be mine (feat Wiskid)", artist: "Gunna"},
            { title: "Sum 2 Prove", artist: "Lil Baby"},
            { title: "Lovin on Me", artist: "Jack Harlow"},
            { title: "TOO FAST", artist: "Future"},
            { title: "Two Six", artist: "J. Cole"},
            { title: "MR RECOUP", artist: "21 Savage, Drake"},

    
            
        ]
        }

]

function showRecommendation(score) {
    const category = recommendedSongs.find(s => s.score === score);
    if (category) {
        const randomSong = category.songs[Math.floor(Math.random() * category.songs.length)];
        document.getElementById("songTitle").textContent = randomSong.title;
        document.getElementById("songArtist").textContent = `Artist: ${randomSong.artist}`;
        document.getElementById("songGenre").textContent = `Genre: ${category.genre}`;
        document.getElementById("results").style.display = "block";
    }
}

// calculating function
function calculateAndShowScore() {
    if (answers.length === 0) {
        console.log("No answers recorded");
        return;
    }
    
//calculating the average score
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const averageScore = totalScore / answers.length;
    const finalScore = Math.round(averageScore);
    
    console.log(`Total answers: ${answers.length}, Average: ${averageScore.toFixed(2)}, Final score: ${finalScore}`);
    console.log("All answers:", answers);
    
 //display recommendation
    showRecommendation(finalScore);
}

