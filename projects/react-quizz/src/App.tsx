import { useQuestionStore } from "./stores/questionStore"
import Game from "./components/Game"

function App() {
    const getQuestions = useQuestionStore(state => state.getQuestions)
    const questions = useQuestionStore(state => state.quizz)
  return (
    <>
      {questions.length === 0 ? (
          <div className="w-[90%] max-w-md text-center space-y-6">
            <h2 className="text-4xl font-bold text-blue-500 uppercase">
              React Quizz
            </h2>
            <p className="text-slate-100">
              ¡Bienvenido al Quiz de React! ⚛️ ¿Estás listo para poner a prueba tus conocimientos sobre la mejor biblioteca de JavaScript? ¡Vamos a por ello! 💪
            </p>
            <button onClick={async() => { await getQuestions()}} className="text-white bg-sky-500 hover:bg-sky-300 px-8 py-2 rounded-md transition-colors">Start</button>
            
          </div>
        ) : (
         <Game/>
        )
      }
        
    </>
  )
}

export default App
