import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "green",
    "purple",
    "blue",
    "yellow",
    "pink",
    "orange",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [currColor, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <s>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id="radio-colors"
                        label={color}
                        value={color}
                        checked={currColor === color}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </s>
            <h3>Change Color</h3>
            You have chosen:{" "}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: currColor }}
            >
                {currColor}
            </span>
        </div>
    );
}
