$(document).ready(function () {
    // Correct answers
    const correctAnswers = {
      q1: "C",
      q2: "A",
      q3: "A",
      q4: "B",
      q5: "B",
      q6: "D",
      q7: "A",
      q8: "B",
      q9: "C",
      q10: "A",
      q11: "B",
      q12: "C",
      q13: "A",
      q14: "A",
      q15: "B",
      q16: "A",
      q17: "B",
      q18: "C",
      q19: "D",
      q20: "B",
    

    };
  
    // User form submission
    $("#userForm").on("submit", function (e) {
      e.preventDefault();
      $("#userFormSection").addClass("d-none");
      $("#examSection").removeClass("d-none");
    });
  
    // Exam form submission
    $("#examForm").on("submit", function (e) {
      e.preventDefault();
      let score = 0;
  
      // Check answers
      for (let question in correctAnswers) {
        const selectedAnswer = $(`input[name=${question}]:checked`).val();
        if (selectedAnswer === correctAnswers[question]) {
          score++;
        }
      }
  
      // Display score
      $("#score").text(score);
      $("#resultSection").removeClass("d-none");
  
      // Render pie chart
      const ctx = document.getElementById("scoreChart").getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Correct", "Incorrect"],
          datasets: [
            {
              data: [score, 20 - score],
              backgroundColor: ["#28a745", "#dc3545"],
            },
          ],
        },
      });
  
      // Review answers
      $("#reviewAnswers").on("click", function () {
        for (let question in correctAnswers) {
          const selectedAnswer = $(`input[name=${question}]:checked`).val();
          if (selectedAnswer) {
            if (selectedAnswer === correctAnswers[question]) {
              $(`input[name=${question}]:checked`).next().addClass("correct");
            } else {
              $(`input[name=${question}]:checked`).next().addClass("incorrect");
            }
          }
          $(`.correct-answer`).removeClass("d-none");
        }
      });
    });
  
    // Reset Exam
    $("#resetExam").on("click", function () {
      // Clear selected answers
      $("input[type=radio]").prop("checked", false);
  
      // Remove correct/incorrect highlights
      $(".form-check-label").removeClass("correct incorrect");
  
      // Hide correct answers
      $(".correct-answer").addClass("d-none");
  
      // Hide result section and show exam section
      $("#resultSection").addClass("d-none");
      $("#examSection").removeClass("d-none");
  
      // Destroy the existing chart (if any)
      if (window.myChart) {
        window.myChart.destroy();
      }
    });
  });