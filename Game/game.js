

(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<div>
            <label >
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>
            </div>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Bài hát 'Tiến quân ca' còn được gọi là gì? ",
        answers: {
          a: "Đoàn ca",
          b: "Quốc ca",
          c: "Đội ca"
        },
        correctAnswer: "c"
      },
      {
        question: "'Em là mầm non của Đảng' là sáng tác của nhạc sĩ nào? ",
        answers: {
          a: "Phan Nhân",
          b: "Việt Anh",
          c: "Mộng Lân"
        },
        correctAnswer: "c"
      },
      {
        question: "'Đêm nằm mơ phố' là sáng tác của ai?",
        answers: {
          a: "Đôn",
          b: "Huy",
          c: "Đức",
          d: "Việt Anh"
        },
        correctAnswer: "d"
      },
      {
        question: "'Cây lúa hàm rồng' là sáng tác của ai?",
        answers: {
          a: "Đôn",
          b: "Techkid",
          c: "Minh",
        },
        correctAnswer: "a"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();