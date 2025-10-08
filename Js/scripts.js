//Quiz Data
const data = [
    {
        question: "Which of the following best describes how a web server works?",
        options: 
        [
            "It stores static files only",
            "It acts as a database engine", 
            "It listens for client requests and sends responses over HTTP/HTTPS",
            "It compiles code into binaries"
        ],
        answer: "It listens for client requests and sends responses over HTTP/HTTPS"
    },

    {
        question: "When a web server responds to multiple requests, what concept is mainly involved?",
        options: 
        [
            "Synchronization",
            "Concurrency",
            "Compilation",
            "Encryption",
        ],
        answer: "Concurrency"
    },

    {
        question: "Which web server is known for high concurrency and low resource usage?",
        options: 
        [
            "Apache",
            "IIS",
            "Tomcat",
            "Nginx"
        ],
        answer: "Nginx"
    },

    {
        question: "In replication, keeping data consistent across servers is called:",
        options: 
        [
            "Serialization",
            "Buffering",
            "Authentication",
            "Synchronization"
        ],
        answer: "Synchronization"
    },

    {
        question: "Node.js applications typically run on which type of server model?",
        options: 
        [
            "Blocking I/O",
            "Multi-process",
            "Non-blocking, event-driven",
            "Thread-per-request",
        ],
        answer: "Non-blocking, event-driven"
    }
]

//DOM elements
const number = document.getElementById("questionNo");
let totalNumber = document.getElementById("total");

let quizContainer = document.getElementById("quiz-container");
let question = document.getElementById("question");
let inputOptions = document.querySelectorAll("input[name='options']");
let labelOptions = document.querySelectorAll("label.form-check-label");
let displayScore = document.getElementById("score");
let form = document.getElementById("form-question");

//Buttons
let buttons = document.getElementsByClassName("btn btn-primary btn-sm");
let btnprevious = document.getElementById("btnPrevious");
let btnNext = document.getElementById("btnNext");
let btn = document.getElementById("btn");


let current = 0;
let index = 0;
let score = 0;
let totalQuestions = data.length;
let userAnswers = {};


function displayQuestion() {
    let currentindex = data[current];

    index = current + 1;

    number.innerHTML = `Q ${index}.`
    totalNumber.innerHTML = `${index}/${totalQuestions}`

// clears input from the previous question
    for (let selected of inputOptions) {
        selected.checked = false;
    }

//displays each question per current index
    question.innerHTML = currentindex.question;
    
// display options for each question.
    for(let x = 0; x < currentindex.options.length; x++){
        inputOptions[x].value = currentindex.options[x]
        labelOptions[x].innerHTML = currentindex.options[x];
    };

// restores saved answer if user goes to previous question
    if (userAnswers[current]) {
    let savedAnswer = userAnswers[current];
    for (let input of inputOptions) {
        if (input.value === savedAnswer) {
            input.checked = true;
            break;
        }
    }
}
};


function getOptionSelected(){
    let selectedOption = document.querySelector("input[name='options']:checked");
    return selectedOption ? selectedOption.value : null;  
};

function saveAnswer() {
    let selected = getOptionSelected();
    if (selected) {
        userAnswers[current] = selected;
    }
    console.log(userAnswers);
};

function calculateScore() {
    score = 0;
    for (let i = 0; i < data.length; i++) {
        if (userAnswers[i] === data[i].answer) {
            score += 10;
        }
    }
};


btnprevious.addEventListener("click", () => {
    saveAnswer();
    if (current > 0) {
        current--;
        index--;
        displayQuestion();
    }else{
        alert("This is the first Question.");
    }
});

btnNext.addEventListener("click", () =>{
    saveAnswer();
    current++;
    btnprevious.disabled = false;

    if(current < totalQuestions){
        displayQuestion();
    }
    else{
        btn.innerHTML = "Submit";
        btn.style.display = "block";

    //hides the form element
        form.style.display = "none";
        document.getElementById("instruction").style.display = "none";

    //hides the previous and next buttons 
        for (let btn of buttons) {
            btn.style.display = "none";
        };
    }  
});

btn.addEventListener("click", () => {
    if(btn.innerHTML === "Submit"){
        calculateScore();
        displayScore.style.display = "block";
        displayScore.innerHTML = `Your total Score: ${((score / 10) / totalQuestions)*100}%`;
        btn.innerHTML = "Restart";
    }
    else if(btn.innerHTML === "Restart"){
        current = 0;
        index = 0;
        score = 0;

        form.style.display = "block";
        btn.style.display = "none";
        btnprevious.disabled = true;
        userAnswers = {};

        document.getElementById("instruction").style.display = "block";

        displayScore.style.display = "none";
        for (let btn of buttons) {
            btn.style.display = "block";
        };

        displayQuestion();
    }
});

displayQuestion();
