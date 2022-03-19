import { ListGroup } from "react-bootstrap";
import { Question } from "./Question";

export function QuestionLayout({
    questions
}: {
    questions: Question[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {questions.map((question: Question) => (
                <ListGroup.Item
                    as="li"
                    key={question.id}
                    className="d-flex align-items-start"
                >
                    <PlaySong song={song}></PlaySong>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
