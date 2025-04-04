import { useQuestionStore } from "../stores/questionStore";
import { Question } from "../types";
import CardQuestion from "./CardQuestion";
import Celebration from "./Celebration";

interface Props{
    readonly questions: Question[]
}

export default function Results({questions}: Props) {
    
    let correctAnswer = 0
    let incorrectAnswer = 0
    const resetQuizz = useQuestionStore(state => state.resetQuizz)
    const hasFinished = useQuestionStore(state => state.hasFinished)
    questions.forEach(q => {
        const indexCorrectAnswer = q.alternatives.findIndex(alt => alt.isCorrect === true)
        if (q.userSelectedAnswer === indexCorrectAnswer)  return correctAnswer++
        return incorrectAnswer++
    })

  return (
    <div className="py-12 w-[90%] mx-auto space-y-6">
        
        {
            (correctAnswer === questions.length && hasFinished) && <Celebration/>
        }
        <div className="text-center max-w-md mx-auto space-y-4">
            <h3 className="font-bold text-3xl md:text-4xl">Resultados del Quizz</h3>
            <p className="inline-flex flex-wrap justify-center gap-3">
                <span>✅ {correctAnswer} respuestas correctas</span>
                <span>❌ {incorrectAnswer} respuestas incorrectas</span>
            </p>
            <button onClick={resetQuizz} className="bg-blue-400 hover:bg-blue-800 transition-colors text-white px-8 py-2 rounded-md">Reset Quizz</button>
        </div>
        <div className="flex flex-col gap-6">
            {
                questions.map((question, index) => (
                    <CardQuestion key={question.id} indexCurrentQuestion={index} currentQuestion={question}/>
                ))
            }
        </div>
    </div>
  )
}
