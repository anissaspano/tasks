import { useState } from "react";
import { Quiz } from "./Quiz";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuizEditor
            changeEditing={changeEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.title}</h3>
                    <RecordControls
                        setQuizWatched={(seen: boolean, liked: boolean) =>
                            setQuizWatched(Quiz.id, seen, liked)
                        }
                        watched={Quiz.watched}
                        changeEditing={changeEditing}
                    ></RecordControls>
                    <QuizRating rating={Quiz.rating}></QuizRating>
                    <i> Released {Quiz.released}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{Quiz.description}</p>
                    <SongList songs={Quiz.soundtrack}></SongList>
                </Col>
                <Col>
                    <QuizTrailer id={Quiz.id}></QuizTrailer>
                </Col>
            </Row>
        </Container>
    );
}
