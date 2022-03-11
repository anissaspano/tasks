import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [editMode, setMode] = useState<boolean>(false);
    const [userName, setName] = useState<string>("Your Name");
    const [studentStatus, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateUserName(event: ChangeEvent) {
        setName(event.target.value);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>({editMode} ? :{userName}{" "}
            {studentStatus ? "is a student" : "is not a student"})
            <Form.Check
                type="switch"
                id="mode-switch-check"
                label="Switch Mode"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode && (
                <>
                    <Form.Group controlId="formChangeName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="string"
                            value={userName}
                            onChange={updateUserName}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student?"
                        checked={studentStatus}
                        onChange={updateStatus}
                    />
                </>
            )}
        </div>
    );
}
