export interface Question {
    id: string; //identifyer
    name: string; //name of question (question itself)
    body: string; //body of question (answer options)
    points: number; //points offered for correct answer
    expected: string; //expected answer
    type: "short_answer_question" | "multiple_choice_question"; //type of question
    published: boolean; //true if questions published, false if not
    answered: boolean; //true if questions been answered, false if not
}
