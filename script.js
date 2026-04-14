// add javascript here
// radio buttons disabled to start
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(button => {
    button.disabled = true;
});

//radio buttons enabled when start button is clicked, start button and name input disabled when start button is clicked
document.getElementById("start").addEventListener('click', function(event) {
    radioButtons.forEach(button => {
        button.disabled = false;
        document.getElementById("start").disabled = true;
        document.getElementById("name").disabled = true;
    });
});

//name
// document.getElementById("name").

// Handle question transitions
document.querySelectorAll('.submit').forEach(button => {
    button.addEventListener('click', function() {
        const questionDiv = this.closest('.question');
        const selected = questionDiv.querySelector('input[type="radio"]:checked');
        if (!selected) {
            alert('Please select an answer.');
            return;
        }
        questionDiv.style.display = 'none';
        const next = this.getAttribute('data-next');
        const nextQuestion = document.getElementById(next);
        if (nextQuestion) {
            nextQuestion.style.display = 'block';
        }
    });
});

