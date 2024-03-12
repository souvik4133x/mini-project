const quizData = [
    {
      question: "Who is considered the father of printing?",
      a: "Johannes Gutenberg",
      b: "William Caxton",
      c: "Leonardo da Vinci",
      d: "Benjamin Franklin",
      correct: "a",
    },
    {
      question: "What does CMYK stand for in the context of printing?",
      a: "Cyan, Magenta, Yellow, Key",
      b: "Cool, Mild, Yellow, Kinetic",
      c: "Color, Mode, Yield, Kinetics",
      d: "Cement, Metal, Yield, Kinetics",
      correct: "a",
    },
    {
      question: "Which material is commonly used for packaging in the food industry?",
      a: "Plastic",
      b: "Metal",
      c: "Glass",
      d: "Paperboard",
      correct: "d",
    },
    {
      question: "What is the purpose of die-cutting in packaging?",
      a: "To create folds",
      b: "To cut and shape materials",
      c: "To apply adhesive",
      d: "To add color",
      correct: "b",
    },
  ];
  
  
  let index = 0;
  let correct = 0,
  incorrect = 0,
  total = quizData.length;
  let incorrectAnswers = [];
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  const loadQuestion = () => {
  if (total === index) {
    return quizEnd()
  }
  reset()
  const data = quizData[index]
  questionBox.innerHTML = `${index + 1}) ${data.question}`
  allInputs[0].nextElementSibling.innerText = data.a
  allInputs[1].nextElementSibling.innerText = data.b
  allInputs[2].nextElementSibling.innerText = data.c
  allInputs[3].nextElementSibling.innerText = data.d
  }
  
  document.querySelector("#submit").addEventListener(
    "click",
    function () {
      const data = quizData[index];
      const ans = getAnswer();
      if (ans === data.correct) {
        correct++;
      } else {
        incorrect++;
        incorrectAnswers.push({
          question: data.question,
          incorrectAnswer: ans,
          correctAnswer: data.correct,
        });
      }
  
      index++;
      loadQuestion();
    }
  );
  
  
  
  const getAnswer = () => {
  let ans;
  allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
  )
  return ans;
  }
  
  
  const reset = () => {
  allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
  )
  }
  
  const quizEnd = () => {
  // console.log(document.getElementsByClassName("container"));
  document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 > Hii, you've scored ${correct} / ${total} </h3>
       
    </div>
  
  `
  let incorrectAnswersHtml = '';
  
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }
  document.getElementsByClassName("container")[0].innerHTML += `
    <div class="col">
        <h3 >${incorrectAnswersHtml} </h3>
       
    </div>
    `
  
  
  }
  
  loadQuestion(index); 