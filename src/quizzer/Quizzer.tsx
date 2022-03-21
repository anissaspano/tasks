import React, { useState } from "react";
import { Quiz } from "./Quiz";
import { QuizList } from "./QuizList";
import quizData from "./quiz_test_data.json";
export function Quizzer(): JSX.Element {
    const QUIZZES = quizData.map(
        (quiz): Quiz => ({
            ...quiz
        })
    );
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    function deleteQuiz(id: string) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    return (
        <div>
            <h3>
                Quizzer
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </h3>
            <h6>
                Completed Tasks:
                <ul>
                    <li>Quizzes are visible</li>
                    <li>Quizzes have questions</li>
                    <li>Short answer and multiple choice</li>
                    <li>Check correctness</li>
                </ul>
            </h6>
        </div>
    );
}
