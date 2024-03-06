const questions =[
    {
       question :"Which Team Won The First 50 Over World Cup ?",
       answers : [
            {text:"India", correct:false},
            { text:"Australia", correct:false},
            { text:"England", correct:false},
            { text:"West Indies", correct:true},
       ]
    },
    {
        question :"When India Won The First WorldCup ?",
       answers : [
            {text:"2011", correct:false},
            { text:"1999", correct:false},
            { text:"1983", correct:true},
            { text:"2023", correct:false},
       ]
    },
    {
    question :"Who Was The Captian,When India Won The First WorldCup ?",
       answers: [
            {text:"Kapil Dev", correct : true},
            { text:"Virat Kholi", correct : false},
            { text:"Sachin Thendulkar", correct : false},
            { text:"Mahendra Sing Dhoni", correct : false},
       ]
    },
    {
        question :"Which Team Won Most No Of WorldCup ?",
       answers : [
            {text:"West Indies", correct:false},
            { text:"South Africa", correct:false},
            { text:"India", correct:false},
            { text:"Australia", correct:true},
       ]
    }
];

var questionElement = document.getElementById("Question");
var answerButton = document.getElementById("answer-btn");
var nextButton  = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
}

function showQuestion(){
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNumber = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

     currentQuestion.answers.forEach(answer =>{
          let button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButton.appendChild(button);

          if(answer.correct){
               button.dataset.answer = answer.correct;
          }
          button.addEventListener("click",function(e){
               var selectedBtn = e.target;
               var isCorrect = selectedBtn.dataset.answer === "true";
               if(isCorrect){
                    selectedBtn.classList.add("Correct");
                    score++;
               }
               else{
                    selectedBtn.classList.add("inCorrect");
               }
               Array.from(answerButton.children).forEach(button =>{
                    if(button.dataset.answer === "true"){
                         button.classList.add("Correct");
                    }
                    button.disabled = true;
               })
               nextButton.style.display = "block";
          });
         
     });
}

function resetState(){
     nextButton.style.display = "none";
     while(answerButton.firstChild){
          answerButton.removeChild(answerButton.firstChild);
     }
}

function showScore(){
     resetState();
     questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length}`
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
}

function handleNextButton(){
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length){
          showQuestion()
     }
     else{
          showScore();
     }
}

nextButton.addEventListener("click",()=>{
     if(currentQuestionIndex < questions.length){
          handleNextButton();
     }
     else{
          startQuiz();
     }
     
})

startQuiz();

