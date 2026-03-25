function submitQuiz() {
   // 1. Get the elements to display the score
   const scoreElement = document.getElementById("score");
   const result = document.getElementById("result");

   // 2. Get the selected answers for all 10 questions
   const qOne = document.querySelector('input[name="q1"]:checked');
   const qTwo = document.querySelector('input[name="q2"]:checked');
   const qThree = document.querySelector('input[name="q3"]:checked');
   const qFour = document.querySelector('input[name="q4"]:checked');
   const qFive = document.querySelector('input[name="q5"]:checked');
   const qSix = document.querySelector('input[name="q6"]:checked');
   const qSeven = document.querySelector('input[name="q7"]:checked');
   const qEight = document.querySelector('input[name="q8"]:checked');
   const qNine = document.querySelector('input[name="q9"]:checked');
   const qTen = document.querySelector('input[name="q10"]:checked');

   const total = 10;
   let score = 0;

   // 3. Check answers (The values must match your HTML value="")
   if (qOne && qOne.value === "eyes") { score++; }
   if (qTwo && qTwo.value === "ears") { score++; }
   if (qThree && qThree.value === "tongue") { score++; }
   if (qFour && qFour.value === "hands") { score++; }
   if (qFive && qFive.value === "legs") { score++; }
   if (qSix && qSix.value === "bottom") { score++; }
   if (qSeven && qSeven.value === "nose") { score++; }
   if (qEight && qEight.value === "teeth") { score++; }
   if (qNine && qNine.value === "arms") { score++; }
   if (qTen && qTen.value === "head") { score++; }
   let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question-card');

function showQuestion(index) {
 // Hide all questions first
 questions.forEach(q => q.classList.remove('active'));

 // Show the specific question at the current index
 questions[index].classList.add('active');
}

// Call this once to show the first question when the page loads
showQuestion(currentQuestionIndex);


   // 4. Display the results to the HTML
   scoreElement.textContent = "Score: " + score;
   result.textContent = "You got " + score + " out of " + total;
}
