import {data} from './questionData.js';

//DOM elements
const number = document.getElementById("questionNo");
let totalNumber = document.getElementById("total");

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
        inputOptions[x].value = currentindex.options[x];
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
};

function calculateScore() {
    score = 0;
    for (let i = 0; i < data.length; i++) {
        if (userAnswers[i] === data[i].answer) {
            score += 10;
        }
    }
    console.log(score);
    
};

//Block of code takes effect once the previous button is clicked
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

//Block of code takes effect once the next button is clicked
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

//Block of code check the text in the button(submit or restart) to decide which block of code to execute
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

//Note: Code improvement
// Add an Admin dashboard to save questions with varying topics.
// When a user comes in and want to use the app, they get to chose which topics they want to be questioned on.
// The Admin get to set a timer for each of the questions according to the topics.
