import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Quiz } from "./Quiz";
import React from "react";
import { QuestionEditor } from "./QuestionEditor";
import { Question } from "./Question";

export function QuizEditor({
    changeEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [description, setDescription] = useState<string>(quiz.description);

    function save() {
        editQuiz(quiz.id, {
            ...quiz,
            title: title,
            description: description
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <div>
            <Form.Group controlId="formQuizTitle" as={Row}>
                <Form.Label column sm={2}>
                    Title:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={title}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setTitle(event.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="formQuizDescription" as={Row}>
                <Form.Label column sm={2}>
                    Description:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={description}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setDescription(event.target.value)}
                    />
                </Col>
            </Form.Group>

            <Button onClick={save} variant="success" className="me-4">
                Save
            </Button>

            <Button onClick={cancel} variant="warning" className="me-5">
                Cancel
            </Button>

            <Button
                onClick={() => deleteQuiz(quiz.id)}
                    variant="danger"
                    className="me-8"
                >
                    Delete
            </Button>

            <QuestionEditor>
                {quiz.questions.map((q: Question) => (
                question=q)}
            </QuestionEditor>
        </div>
    );
}
