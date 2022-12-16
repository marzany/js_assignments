let questions = [];
var score = 0;
var question;
var choiceElement;


// function to generate questions and choices
function generateQuiz() {
  var questionIndex = 0;
  fetch("questions.json")
    .then((response) => response.json())
    .then(data => {
  // get the current question object from the array 
  for (var i = 0; i < data.length; i++) {
    question = data[questionIndex];

  // create HTML elements for the question and answer choices
    var questionElement = document.createElement("h3");
    questionElement.innerHTML = question.question;

    var choicesElement = document.createElement("div");

  // loop through the answer choices and create item for each one
    for (var j = 0; j < question.choices.length; j++) {
      var choice = question.choices[j];

      var label = document.createElement("label");
      choiceElement = document.createElement("input");
      choiceElement.type = "radio";
      choiceElement.name = "q" + questionIndex;
      choiceElement.id = j;
      choiceElement.value = choice;
      label.innerHTML = choice;
      label.appendChild(choiceElement);
      choicesElement.appendChild(label);
      choicesElement.appendChild(document.createElement("br"));
    }
    document.getElementById("quiz").appendChild(questionElement);
    document.getElementById("quiz").appendChild(choicesElement);
    questionIndex += 1;
  }

  });
}

// Check correct answers and display score!
function showResults(event) {

  let answer1 = "";
  let answer2 = "";
  let answer3 = "";

  for (let answerChoice of document.getElementsByName("q0")) {
    if (answerChoice.checked) {
      answer1 = answerChoice.value;
    }
  }
  for (let answerChoice of document.getElementsByName("q1")) {
    if (answerChoice.checked) {
      answer2 = answerChoice.value;
    }
  }
  for (let answerChoice of document.getElementsByName("q2")) {
    if (answerChoice.checked) {
      answer3 = answerChoice.value;
    }
  }
  if (answer1 == "" || answer2 == "" || answer3 == "") {
    alert('Please answer all questions!');
  } else {

  event.preventDefault();
  fetch("questions.json")
    .then((response) => response.json())
    .then(data => {
      if (data[0].correctAnswer == answer1) {
        score += 1;
      } else {
        score += 0;
      }
      if (data[1].correctAnswer == answer2) {
        score += 1;
      } else {
        score += 0;
      }
      if (data[2].correctAnswer == answer3) {
        score += 1;
      } else {
        score += 0;
      }
      document.getElementById("id_result").innerText = "Score : " + score;
      score = 0;
    });
  }
}
// start the quiz
generateQuiz();
