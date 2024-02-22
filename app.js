var questions = [
    {
        question: "If Sally has 8 apples and gives 3 to her friend, how many apples does she have left?",
        options: [
            "2", 
            "5", 
            "3", 
            "8"],
        correctAnswer: "5"
    },
    {
        question: "What is the sum of 9 and 6?",
        options: [
            "11", 
            "14", 
            "12", 
            "15"],
        correctAnswer: "15"
    },
    {
        question:"If a box has 5 red balls, 3 blue balls, and 2 green balls, how many balls are there in total?",
        options:["7","8","10","12"],
        correctAnswer:"10"
    },
    {
        question:"If a pencil costs 4 rupees, how much will 5 pencils cost?",
        options:["10 rupees","15rupees","20 rupees","25 rupees"],
        correctAnswer:"20 rupees",
    },
    {
        question:"If a rectangle has a length of 7 units and a width of 4 units, what is its area?",
        options:["28 square units","18 square units","11 square units","14 square units"],
        correctAnswer:"28 square units",
    }
    
];
var questionDisplay = document.getElementById("displayQuestion");
var options = document.getElementById("parentOption");
var currentQuestion = document.getElementById("questionNumber");
var totalQuestions = document.getElementById("totalQuestionNumbers");
var displayQuiz = document.getElementById("displayQuiz");
var result = document.getElementById("resultDisplay");

var indexValue = 0;
var marks = 0;

function showQuestions(){
    questionDisplay.innerHTML = questions[indexValue].question;

    for(var i =0; i < questions[indexValue].options.length ; i++){
        var optVal = questions[indexValue].options[i];
        var corrVal = questions[indexValue].correctAnswer;

        options.innerHTML += `<button onclick="questionCheck('${optVal}','${corrVal}')"
        class="btn p-3 bg-primary-subtle rounded-pill text-dark-emphasis m-2">${questions[indexValue].options[i]}</button>`;
    }
    totalQuestions.innerHTML = questions.length;
    currentQuestion.innerHTML = indexValue + 1;
}

showQuestions();

function nextQuestionBtnClick() {
    options.innerHTML = "";
    if (indexValue +1 == questions.length) {
        displayResult();
        result.style.display = "block";
        displayQuiz.style.display = "none";
    } else {
        indexValue ++;
        showQuestions();
    }
}

function questionCheck(optionValue,correctValue){
    if(optionValue === correctValue){
        marks ++;
        console.log(marks);
    }
    nextQuestionBtnClick();
}


function calculateResult() {
    var totalQuestions = questions.length;
    return ((marks / totalQuestions) * 100).toFixed(2);
}

function displayResult() {
    if (result) {
        result.style.display = "block";
        displayQuiz.style.display = "none";

        var resultPercentage = calculateResult();
        console.log("Result Percentage:", resultPercentage);
        var percentageElement = document.getElementById("percentage");
        console.log("Percentage Element:", percentageElement);
        percentageElement.textContent = resultPercentage;
    } else {
        console.error("Result element is null");
    }
}

function startAgain(){
    indexValue = 0;
    marks = 0;
    result.style.display = "none";
    displayQuiz.style.display = "block";
    showQuestions();
}











