import { useState } from "react";
import { Quiz } from "./Quiz";
import { QuizEditor } from "./QuizEditor";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { QuestionLayout } from "./QuestionLayout";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <p>{quiz.description}</p>
                </Col>
                <Col>Number of Questions: {quiz.numQuestions}</Col>
            </Row>
            <Row>
                {quiz.questions.map((item) => {
                    return (
                        <div key={item.id}>
                            <QuestionLayout question={item}></QuestionLayout>
                        </div>
                    );
                })}
            </Row>
        </Container>
    );
}
