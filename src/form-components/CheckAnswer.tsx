import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    function checkAnswer(expectedAnswer: string, inputAnswer: string): string {
        let display = "❌";
        if (expectedAnswer === inputAnswer) {
            display = "✔️";
        }
        return display;
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Input Answer:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {checkAnswer(expectedAnswer, answer)}
        </div>
    );
}
