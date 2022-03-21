import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultChoiceQuestion({
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
            <Form.Group controlId="multChoiceQuestion">
                <Form.Label>{title}</Form.Label>
                <Form.Select value={chosenAnswer} onChange={updateAnswer}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h6>Answer is {checkAnswer(expectedAnswer, chosenAnswer)}</h6>
        </div>
    );
}
