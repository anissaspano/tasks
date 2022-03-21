import { MultChoiceQuestion } from "./MultChoiceQuestion";
import { Question } from "./Question";
import { ShortAnswerQuestion } from "./ShortAnswerQuestion";
import React from "react";

export function QuestionLayout({
    question
}: {
    question: Question;
}): JSX.Element {
    return question.type === "multiple_choice_question" ? (
        <MultChoiceQuestion
            title={question.name}
            options={question.options}
            expectedAnswer={question.expected}
        ></MultChoiceQuestion>
    ) : (
        <ShortAnswerQuestion
            title={question.name}
            options={question.options}
            expectedAnswer={question.expected}
        ></ShortAnswerQuestion>
    );
}
