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
                    <h2 style={{ backgroundColor: "yellow" }}>{quiz.title}</h2>
                    <h5>{quiz.description}</h5>
                </Col>
                <Col>
                    <h6>Number of Questions: {quiz.numQuestions}</h6>
                </Col>
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
