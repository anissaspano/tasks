import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDie, rollRightDie] = useState<number>(6);
    const [leftDie, rollLeftDie] = useState<number>(3);

    const isMatching = (leftDie: number, rightDie: number): boolean => {
        return leftDie === rightDie;
    };

    const isWinner = (leftDie: number): boolean => {
        return leftDie !== 1;
    };

    const printStatement = (match: boolean, win: boolean): string => {
        let message = "";
        if (match) {
            if (match && win) {
                message = "Win";
            } else {
                message = "Lose";
            }
        } else {
            message = "";
        }
        return message;
    };
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>.
            <span data-testid="right-die">{rightDie}</span>.
            <Button onClick={() => rollLeftDie(d6)}>Roll Left</Button>
            <Button onClick={() => rollRightDie(d6)}>Roll Right</Button>
            {printStatement(isMatching(leftDie, rightDie), isWinner(leftDie))}
        </div>
    );
}
