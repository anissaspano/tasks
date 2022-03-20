import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
    deleteQuestion: (id: string) => void;
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
            points: points || 0,
            published: published
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    function updatePublished(event: React.ChangeEvent<HTMLInputElement>) {
        setPublished(event.target.checked);
    }
    return (
        <div>
            <Form.Group controlId="formQuestionName" as={Row}>
                <Form.Label column sm={2}>
                    Question Name:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="formQuestionBody" as={Row}>
                <Form.Label column sm={2}>
                    Question Body:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={body}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setBody(event.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group controlId="formQuestionPoints" as={Row}>
                <Form.Label column sm={2}>
                    Points:
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={points}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setPoints(parseInt(event.target.value))}
                    />
                </Col>
            </Form.Group>
            <Form.Check
                type="switch"
                id="mode-switch-check"
                label="Switch Mode"
                checked={published}
                onChange={updatePublished}
            />
            <Button onClick={save} variant="success" className="me-4">
                Save
            </Button>

            <Button onClick={cancel} variant="warning" className="me-5">
                Cancel
            </Button>

            <Button
                onClick={() => deleteQuestion(question.id)}
                variant="danger"
                className="me-8"
            >
                Delete
            </Button>
        </div>
    );
}
