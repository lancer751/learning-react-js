import { useQuestionStore } from "../stores/questionStore"
import CardQuestion from "./CardQuestion"
import Results from "./Results"

export default function Game() {
    const questions = useQuestionStore(state => state.quizz)
    const indexCurrentQuestion = useQuestionStore(state => state.indexCurrentQuestion)
    const hasFinished = useQuestionStore(state => state.hasFinished)
    const currentQuestion= questions[indexCurrentQuestion]

  return (
    <>
        {
            hasFinished
            ?  <Results questions = {questions}/>
            :  <CardQuestion currentQuestion = {currentQuestion} indexCurrentQuestion={indexCurrentQuestion}/>
        }
   
    </>
  )
}
