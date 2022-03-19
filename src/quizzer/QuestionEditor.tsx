import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Quiz } from "./Quiz";
import React from "react";
import { Question } from "./Question";

export function QuestionEditor({
    changeEditing,
    question,
    editQuestion,
    deleteQuestion
}: {
    changeEditing: () => void;
    question: Question;
    editQuestion: (id: string, newQuestion: Question) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [name, setName] = useState<string>(question.name);
    const [body, setBody] = useState<string>(question.body);
    const [points, setPoints] = useState<number>(question.points);
    const [published, setPublished] = useState<boolean>(question.published);

    function save() {
        editQuestion(question.id, {
            ...question,
            name: name,
            body: body,
            points: points,
            published: published
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <div>
            <Form.Group controlId="formMovieTitle" as={Row}>
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
            <QuestionEditor> insert question editor info </QuestionEditor>
        </div>
    );
}
