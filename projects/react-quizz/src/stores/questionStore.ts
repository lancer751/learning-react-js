import { create } from "zustand";
import { Question } from "../types";

interface QuestionState {
    quizz: Question[],
    indexCurrentQuestion: number,
    hasFinished: boolean,
    getQuestions: () => Promise<void>,
    nextQuestion: () => void,
    prevQuestions: () => void,
    selectAnswer: (questionID: number, answerId: number) => void,
    finishQuizz: () => void,
    resetQuizz: () => void
}

export const useQuestionStore = create<QuestionState>()((set, get) => ({
    quizz: [],
    indexCurrentQuestion: 0,
    hasFinished: false,
    getQuestions: async () => {
        try{
            const response = await fetch('./data.json')
            const data : Question[] = await response.json()
            const mixedQuestions = data.sort(() => Math.random() - 0.5)
            set({quizz: mixedQuestions})
        }catch(error){
            console.log(error)
        }
    },
    nextQuestion: () => {
        const {indexCurrentQuestion, quizz} = get()
        if (indexCurrentQuestion >= quizz.length - 1) return
        set({indexCurrentQuestion: indexCurrentQuestion + 1})
    },
    prevQuestions: () => {
        const {indexCurrentQuestion} = get()
        if (indexCurrentQuestion === 0) return
        set({indexCurrentQuestion: indexCurrentQuestion - 1})
    },
    selectAnswer: (questionID, answerId) => {
        const {quizz} = get()
        const newQuestions = structuredClone(quizz)
        const questionInfo = newQuestions.find(question => question.id === questionID)
        if(!questionInfo) return
        questionInfo.userSelectedAnswer = answerId
        set({quizz: newQuestions})
    },
    finishQuizz: () => set({hasFinished: true, indexCurrentQuestion: 0}),
    resetQuizz: () => set({hasFinished: false, quizz: []})
}))