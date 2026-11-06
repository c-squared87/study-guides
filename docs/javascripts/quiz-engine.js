
/*
 * QUIZ ENGINE
 * Version: 1.0
 *
 * Responsibilities:
 * - Load quiz data from JSON
 * - Display questions and answers
 * - Manage question navigation
 * - Calculate quiz results
 * - Display explanations
 */

// --------------------------------------------------
// 1. CONFIGURATION
// --------------------------------------------------

// The quiz page provides this ID to identify its quiz.
const quizContainer = document.getElementById("quiz-container");

// Track the current quiz and user progress.
let quizData = null;
let currentQuestionIndex = 0;
let userAnswers = {};
let quizSubmitted = false;


// --------------------------------------------------
// 2. INITIALIZE QUIZ
// --------------------------------------------------

async function initializeQuiz() {

    // Stop if this page doesn't contain a quiz.
    if (!quizContainer) return;

    try {

        // Get the quiz file location from the page.
        const quizUrl = new URL(
            "../../quiz-data/algebra-week-01.json",
            window.location.href
        );

        // Download and parse the JSON file.
        const response = await fetch(quizUrl);

        if (!response.ok) {
            throw new Error("Unable to load quiz data.");
        }

        quizData = await response.json();

        // Start displaying the quiz.
        renderQuestion();

    } catch (error) {

        console.error("Quiz initialization failed:", error);

        quizContainer.innerHTML =
            "<p>Sorry, the quiz could not be loaded.</p>";
    }
}


// --------------------------------------------------
// 3. DISPLAY A QUESTION
// --------------------------------------------------

function renderQuestion() {

    const question = quizData.questions[currentQuestionIndex];
    const totalQuestions = quizData.questions.length;
    const selectedAnswer = userAnswers[question.id];

    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // Generate the answer choices.
    const optionsHTML = question.options.map((option, index) => {

        const isSelected = selectedAnswer === index;

        return `
            <label class="quiz-option ${isSelected ? "selected" : ""}">
                <input
                    type="radio"
                    name="quiz-answer"
                    value="${index}"
                    ${isSelected ? "checked" : ""}
                    onchange="selectAnswer(${index})"
                >
                <span class="quiz-option-text">${option}</span>
            </label>
        `;

    }).join("");

    quizContainer.innerHTML = `

        <div class="quiz-app">

            <div class="quiz-header">

                <div class="quiz-progress">
                    <span>Question ${currentQuestionIndex + 1} of ${totalQuestions}</span>
                    <span>${Math.round(progress)}% complete</span>
                </div>

                <div class="quiz-progress-bar">
                    <div
                        class="quiz-progress-fill"
                        style="width: ${progress}%"
                    ></div>
                </div>

            </div>

            <div class="quiz-question">

                <h3>${question.question}</h3>

                <div class="quiz-options">
                    ${optionsHTML}
                </div>

            </div>

            <div class="quiz-navigation">

                <button
                    class="quiz-button quiz-button-secondary"
                    onclick="previousQuestion()"
                    ${currentQuestionIndex === 0 ? "disabled" : ""}
                >
                    Previous
                </button>

                ${currentQuestionIndex === totalQuestions - 1
                    ?
                    `<button class="quiz-button quiz-button-primary" onclick="submitQuiz()">Submit Quiz</button>`
                    :
                    `<button class="quiz-button quiz-button-primary" onclick="nextQuestion()">Next</button>`
                }

            </div>

        </div>

    `;

    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise([quizContainer]);
    }
}


// --------------------------------------------------
// 4. ANSWER SELECTION
// --------------------------------------------------

function selectAnswer(answerIndex) {

    if (quizSubmitted) return;

    const question = quizData.questions[currentQuestionIndex];

    // Store the selected answer.
    userAnswers[question.id] = answerIndex;

    // Refresh the page to update the selected styling.
    renderQuestion();
}


// --------------------------------------------------
// 5. QUESTION NAVIGATION
// --------------------------------------------------

function nextQuestion() {

    if (currentQuestionIndex < quizData.questions.length - 1) {

        currentQuestionIndex++;

        renderQuestion();

    }
}


function previousQuestion() {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        renderQuestion();

    }
}


// --------------------------------------------------
// 6. SUBMIT QUIZ
// --------------------------------------------------

function submitQuiz() {

    if (quizSubmitted) return;

    // Count unanswered questions.
    const unanswered = quizData.questions.filter(
        question => userAnswers[question.id] === undefined
    );

    // Confirm before submitting an incomplete quiz.
    if (unanswered.length > 0) {

        const confirmed = confirm(
            `You have ${unanswered.length} unanswered question(s). Submit anyway?`
        );

        if (!confirmed) return;

    }

    quizSubmitted = true;

    renderResults();
}


// --------------------------------------------------
// 7. CALCULATE RESULTS
// --------------------------------------------------

function calculateResults() {

    let correctAnswers = 0;
    let totalPoints = 0;
    let earnedPoints = 0;

    const topicResults = {};

    quizData.questions.forEach(question => {

        const points = question.points || 1;

        const selectedAnswer = userAnswers[question.id];

        const isCorrect = selectedAnswer === question.correct_answer;

        totalPoints += points;

        if (isCorrect) {

            correctAnswers++;
            earnedPoints += points;

        }

        // Track performance by topic.
        if (!topicResults[question.topic]) {

            topicResults[question.topic] = {
                correct: 0,
                total: 0
            };

        }

        topicResults[question.topic].total++;

        if (isCorrect) {
            topicResults[question.topic].correct++;
        }

    });

    const percentage = totalPoints === 0
        ? 0
        : Math.round((earnedPoints / totalPoints) * 100);

    return {
        correctAnswers,
        totalQuestions: quizData.questions.length,
        earnedPoints,
        totalPoints,
        percentage,
        topicResults
    };

}


// --------------------------------------------------
// 8. DISPLAY RESULTS
// --------------------------------------------------

function renderResults() {

    const results = calculateResults();

    const passed = results.percentage >=
        quizData.settings.passing_score;

    const reviewHTML = quizData.questions.map((question, index) => {

        const selectedAnswer = userAnswers[question.id];
        const isCorrect = selectedAnswer === question.correct_answer;

        const selectedText = selectedAnswer === undefined
            ? "Not answered"
            : question.options[selectedAnswer];

        return `

            <div class="quiz-review-item ${isCorrect ? "correct" : "incorrect"}">

                <div class="quiz-review-heading">
                    <h3>Question ${index + 1}</h3>
                    <span class="quiz-review-status">
                        ${isCorrect ? "Correct" : "Incorrect"}
                    </span>
                </div>

                <p>${question.question}</p>

                <p>
                    <strong>Your answer:</strong>
                    ${selectedText}
                </p>

                <p>
                    <strong>Correct answer:</strong>
                    ${question.options[question.correct_answer]}
                </p>

                <div class="quiz-explanation">
                    <strong>Explanation</strong>
                    <p>${question.explanation}</p>
                </div>

            </div>

        `;

    }).join("");

    const topicHTML = Object.entries(results.topicResults).map(
        ([topic, data]) => {

            const percentage = Math.round(
                (data.correct / data.total) * 100
            );

            return `
                <div class="quiz-topic-result">
                    <strong>${topic}</strong>
                    <span>${data.correct}/${data.total} (${percentage}%)</span>
                </div>
            `;

        }
    ).join("");

    quizContainer.innerHTML = `

        <div class="quiz-app">

            <div class="quiz-results">

                <div class="quiz-score-card">

                    <h2>Quiz Complete!</h2>

                    <div class="quiz-score-percentage">
                        ${results.percentage}%
                    </div>

                    <p>
                        ${results.correctAnswers}
                        out of
                        ${results.totalQuestions}
                        questions correct
                    </p>

                    <h3 class="${passed ? "quiz-passed" : "quiz-failed"}">
                        ${passed ? "Passed!" : "Not Passed"}
                    </h3>

                </div>

                <section class="quiz-results-section">

                    <h3>Topic Performance</h3>

                    <div class="quiz-topic-results">
                        ${topicHTML}
                    </div>

                </section>

                <section class="quiz-results-section">

                    <h3>Question Review</h3>

                    <div class="quiz-review">
                        ${reviewHTML}
                    </div>

                </section>

                <div class="quiz-results-actions">

                    <button
                        class="quiz-button quiz-button-primary"
                        onclick="retakeQuiz()"
                    >
                        Retake Quiz
                    </button>

                </div>

            </div>

        </div>

    `;

    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise([quizContainer]);
    }

}


// --------------------------------------------------
// 9. RETAKE QUIZ
// --------------------------------------------------

function retakeQuiz() {

    currentQuestionIndex = 0;

    userAnswers = {};

    quizSubmitted = false;

    renderQuestion();

}


// --------------------------------------------------
// 10. START THE QUIZ
// --------------------------------------------------

initializeQuiz();
