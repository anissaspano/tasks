import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnswerQuestion({
    title,
    options,
    expectedAnswer
}: {
    title: string;
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [chosenAnswer, setChosenAnswer] = useState<string>(options[0]);

    function checkAnswer(expectedAnswer: string, inputAnswer: string): string {
        let display = "❌";
        if (expectedAnswer === inputAnswer) {
            display = "✔️";
        }
        return display;
    }

    function updateAnswer(event: ChangeEvent) {
        setChosenAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Short Answer Question</h3>
            <Form.Group controlId="shortAnsQuestion">
                <Form.Label>{title}</Form.Label>
                <Form.Control
                    type="string"
                    value={chosenAnswer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <s>Answer is {checkAnswer(expectedAnswer, chosenAnswer)}</s>
        </div>
    );
}
