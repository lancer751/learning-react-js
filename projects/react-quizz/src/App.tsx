import {  useState } from "react"
import { useQuestionStore } from "./stores/questionStore"
import Game from "./components/Game"

function App() {
  const [start, setStart] = useState(false)
    const getQuestions = useQuestionStore(state => state.getQuestions)
    const questions = useQuestionStore(state => state.quizz)
  return (
    <>
      {!start && questions.length === 0 ? (
          <div className="w-[90%] max-w-md text-center space-y-6">
            <h2 className="text-4xl font-bold text-blue-500 uppercase">
              React Quizz
            </h2>
            <p className="text-blue-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor, illum quia voluptas placeat quae amet cupiditate sed nesciunt molestiae.
            </p>
            <button onClick={async() => { await getQuestions(); setStart(!start)}} className="text-white bg-sky-500 hover:bg-sky-300 px-8 py-2 rounded-md transition-colors">Start</button>
          </div>
        ) : (
         <Game/>
        )
      }
        
    </>
  )
}

export default App
