let questions = [
    {
        question: "How many legs does a horse have?",
        options: {
            A: "3",
            B: "4",
            C: "5"
        },
        correctAnswer: "b",
        correctResponse: "Correct!",
        incorrectResponse: "Wrong!"
    },
    {
        question: "How many teeth does a dog have?",
        options: {
            A: "42",
            B: "39",
            C: "41"
        },
        correctAnswer: "a",
        correctResponse: "Correct!",
        incorrectResponse: "Wrong!"
    },
    {
        question: "What kind of animal is a raccoon?",
        options: {
            A: "Amphibian",
            B: "Reptile",
            C: "Mammal"
        },
        correctAnswer: "c",
        correctResponse: "Correct!",
        incorrectResponse: "Wrong!"
    },
];
let currentQuestionIndex = 0;
let messageContainer = document.getElementById("message-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementsByName("choice");
let score = 0;
let scoreDisplay = document.getElementById("score");
scoreDisplay.innerHTML = `Score ${score}/3`;
displayQuestion();
function displayQuestion() {
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    if (currentQuestionIndex > 2) {
        botResponse.innerHTML = "<strong>BOT:</strong> The test is over!";
    }
    else {
        let currentQuestion = questions[currentQuestionIndex];
        let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}.${currentQuestion.options[key]}`).join(' ');
        botResponse.innerHTML = `<strong>BOT:</strong> ${currentQuestion.question}<br><strong>BOT:</strong> ${optionsHTML}`;
    }
    messageContainer.appendChild(botResponse);
}
function scrollChatContainerToBottom() {
    let messageContainer = document.getElementById("message-container");
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userResponse;
    if (userInput[0].checked == true) {
        userResponse = "a";
    }
    else if (userInput[1].checked == true) {
        userResponse = "b";
    }
    else {
        userResponse = "c";
    }
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>USER:</strong> ${userResponse.toUpperCase()}`;
    messageContainer.appendChild(userMessage);
    if (currentQuestionIndex < 3) {
        let currentQuestion = questions[currentQuestionIndex];
        let botResponse = document.createElement("div");
        botResponse.classList.add("message");
        botResponse.innerHTML = `<strong>BOT:</strong> `;
        if (userResponse === currentQuestion.correctAnswer) {
            botResponse.innerHTML += currentQuestion.correctResponse;
            score++;
            scoreDisplay.innerHTML = `Score ${score}/3`;
            if (score == 3) {
                scoreDisplay.innerHTML = `Score ${score}/3, Congratulations!`
            }
        } 
        else {
            botResponse.innerHTML += currentQuestion.incorrectResponse;
        }
        messageContainer.appendChild(botResponse);
    }
    else {
        scoreDisplay.innerHTML = `Score ${score}/3, Congratulations!`;
    }
    currentQuestionIndex = currentQuestionIndex + 1;
    displayQuestion();
    scrollChatContainerToBottom();
});