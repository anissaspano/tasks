import { Question } from "./Question";

export interface Quiz {
    id: string; //identifyer
    title: string; //title of quiz
    description: string; //description of quiz
    numQuestions: number; //number of quiz questions
    questions: Question[]; //list of questions in quiz
    completed: boolean; //true if user completed quiz, false if not
}
