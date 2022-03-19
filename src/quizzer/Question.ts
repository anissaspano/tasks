export interface Question {
    name: string;
    body: string;
    points: number;
    expected: string;
    type: "short_answer_question" | "multiple_choice_question";
}
