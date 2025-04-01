import { useQuestionStore } from "../stores/questionStore";
import { Question } from "../types";

interface Props {
    readonly questions: Question[]
}

export default function CardQuestion({questions} : Props) {
    const indexCurrentQuestion = useQuestionStore(state => state.indexCurrentQuestion)
    const nextQuestion = useQuestionStore(state => state.nextQuestion)
    const prevQuestion = useQuestionStore(state => state.prevQuestions)
    const selectAnswer = useQuestionStore(state => state.selectAnswer)
    const currentQuestion= questions[indexCurrentQuestion]
    const {id: questionId, question, alternatives, userSelectedAnswer} = currentQuestion
    console.log(userSelectedAnswer)
    return (
        <div className="relative bg-slate-800 w-[90%] mx-auto max-w-lg rounded-md px-6 py-8 text-white space-y-7">
            <span className="inline-block text-slate-200 text-sm mb-1">
                {`${indexCurrentQuestion + 1} / ${questions.length}`}
            </span>
            <h3 className="text-white font-semibold text-2xl">{question}</h3>
            <div className="space-y-3">
                {
                    alternatives.map((answer, index) => (
                        <button onClick={() => selectAnswer(questionId, index)} key={answer.option} className={`cursor-pointer block w-full text-sm text-left px-4 py-2 transition-colors ${userSelectedAnswer === index ? "bg-black" : "bg-gray-600 hover:bg-white/10"}`}>
                            {answer.option}
                        </button>
                    ))
                }
            </div>
            <div className="flex w-full justify-between items-center">
                <button onClick={prevQuestion} disabled = {(indexCurrentQuestion === 0)} className="cursor-pointer px-6 py-2 rounded-md bg-amber-300 hover:bg-amber-200 text-blue-950 transition-colors disabled:bg-amber-300/30">Previous</button>
                
                <button disabled = {(indexCurrentQuestion === questions.length - 1)} onClick={nextQuestion} className="cursor-pointer px-6 py-2 rounded-md bg-sky-300 hover:bg-sky-200 text-blue-950 transition-colors disabled:bg-sky-300/30">Next</button>
                {
                    questions.every(q => q.userSelectedAnswer !== undefined) && 
                    <button className="cursor-pointer px-6 py-2  rounded-md absolute -bottom-14 left-1/2 -translate-x-1/2 bg-red-400 hover:bg-red-500 transition-colors">Terminar Encuesta</button>
                }   
            </div>
        </div>
    )
}
