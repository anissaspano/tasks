import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);
    function updateAttemptsRequested(event: ChangeEvent) {
        const attempts = parseInt(event.target.value) || 0;
        setAttemptsRequested(attempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            Current number of attempts: {attemptsLeft}
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + attemptsRequested)
                }
            >
                gain
            </Button>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
        </div>
    );
}
