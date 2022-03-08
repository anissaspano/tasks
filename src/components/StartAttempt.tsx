import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [value, setValue] = useState<number>(4);
    function flipProgress(): void {
        setProgress(!progress);
    }
    return (
        <div>
            <Button
                onClick={() => {
                    setValue(value - 1);
                    flipProgress();
                }}
                disabled={progress || value === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setValue(1 + value)} disabled={progress}>
                Mulligan
            </Button>
            <Button onClick={() => flipProgress()} disabled={!progress}>
                Stop Quiz
            </Button>
        </div>
    );
}
