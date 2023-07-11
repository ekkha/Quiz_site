const quizDB= [
    
      {
        question: "Q1:Arrays in JavaScript can be used to store ______?",
        
          A:"numbers and strings",
          B:" other arrays",
          C:" booleans",
          D:" all of the above",
        ans:"ans4"
      },
      {
        question:
          "Q2: String values must be enclosed within _____ when being assigned to variables.",
       A:" commas", 
       B:" curly brackets",
       C: "quotes",
       D: "parentheses",
        ans: "ans3"
      },
      {
        question:
          "Q3: A very useful tool used during development and debugging for printing content to the debugger is:",
        
          A: " JavaScript",
          B:"terminal/bash",
          C:" for loops",
          D:" console.log",
        
        ans: "ans4",
      },
      {
        question:
          "Q4: Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
        A: "break",
        B: "stop", 
        C:" halt",
        D: " exit",
        ans: "ans1"
      }
    ];
    
    const question=document.querySelector('.question');
    const option1=document.querySelector('#option1');
    const option2=document.querySelector('#option2');
    const option3=document.querySelector('#option3');
    const option4=document.querySelector('#option4');
    const submit=document.querySelector('#submit')
    
    const answers = document.querySelectorAll('.answer')

    const showScore= document.querySelector('#showScore')

    let questionCount=0;
    let score =0;
    
    

    const loadQuestion= () => {

      const questionList=quizDB[questionCount];

      question.innerText=questionList.question; 

       option1.innerText= questionList.A;
       option2.innerText= questionList.B;
       option3.innerText= questionList.C;
       option4.innerText= questionList.D;



    }

loadQuestion();

const getCheckAnswer= () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer=curAnsElem.id;
    }
    
  });
  return answer; 

};

const deselectAll =()=>{
  answers.forEach((curAnsElem)=> curAnsElem.checked= false);
}


submit.addEventListener('click',()=>{
  const checkedAnswer = getCheckAnswer();
 console.log(checkedAnswer);

 if(checkedAnswer===quizDB[questionCount].ans){
  score++;
  
   };
   
   questionCount++;

   if(questionCount< quizDB.length){
    loadQuestion();
   }else{

    showScore.innerHTML= `
    <h3>you scored ${score}/${quizDB.length} 👌</h3>
   
    <button class="btn" onclick= "location.reload()">Play Again </button>
    ` ;

    showScore.classList.remove('scoreArea');
   }


 });











