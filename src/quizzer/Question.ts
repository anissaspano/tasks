export interface Question {
    id: string; //identifyer
    name: string; //name of question (question itself)
    body: string; //explanation for question
    points: number; //points offered for correct answer
    expected: string; //expected answer
    type: string; //type of question
    published: boolean; //true if questions published, false if not
    answered: boolean; //true if questions been answered, false if not
    options: string[]; //answer options for mult choice
}
