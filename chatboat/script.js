// FAQs and corresponding answers
var faqs = [
    {
        question: "What is the application form deadline of Exam A?",
        answer: "The application form deadline for Exam A is on July 15, 2023.",
        link: ""
    },
    {
        question: "What is the application form deadline of Exam B?",
        answer: "The application form deadline for Exam B is on August 31, 2023.",
        link: ""
    },
    // Add more FAQs here
];

var chatArea = document.getElementById('chatArea');
var userInput = document.getElementById('userInput');

function showBotMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.className = 'message bot-message';
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function showUserMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function searchFAQs(question) {
    for (var i = 0; i < faqs.length; i++) {
        if (faqs[i].question.toLowerCase() === question.toLowerCase()) {
            return faqs[i].answer;
        }
    }
    return "I'm sorry, but I don't have the answer to that question.";
}

function processUserInput() {
    var message = userInput.value.trim();
    if (message !== "") {
        showUserMessage(message);
        var answer = searchFAQs(message);
        showBotMessage(answer);
    }
    userInput.value = "";
}

// Handle user input when pressing Enter
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        processUserInput();
    }
});
