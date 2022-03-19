import React from "react";
/*import { Movie } from "../interfaces/movie";
import { Stack } from "react-bootstrap";
import { MovieView } from "./MovieView";*/

export function QuizList({
    quizzes,
    deleteQuiz,
    editQuiz
}: {
    quizzes: Quiz[];
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    setQuizWatched: (id: string, s: boolean, l: boolean) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: Quiz) => (
                <div key={quiz.id} className="bg-light border m-2 p-2">
                    <QuizView
                        quiz={quiz}
                        deleteQuiz={deleteQuiz}
                        editQuiz={editQuiz}
                    ></QuizView>
                </div>
            ))}
        </Stack>
    );
}
