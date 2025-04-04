
import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import Confetti from "react-confetti"

export default function Celebration() {
    const [pieces, setPieces] = useState(1000) // Cantidad inicial de confeti
    const [width, height] = useWindowSize()

    useEffect(() => {
        if (pieces > 0) {
          const interval = setInterval(() => {
            setPieces((prev) => Math.max(prev - 10, 0))
          }, 200);
          return () => clearInterval(interval);
        }
    }, [pieces]);

  return (
    <div className="backdrop-blur-xs fixed bg-black/20 inset-0 flex justify-center items-center z-10 mb-0">
        <Confetti width={width} height={height} gravity={0.1} numberOfPieces={pieces}/>
        <div className='w-[90%] space-y-7 mx-auto text-center bg-gray-900 max-w-md rounded-md  text-white px-5 py-8 z-50'>
            <i className="text-9xl inline-block">🎊</i>
            <h4 className="text-white text-3xl font-extrabold">Congratulations</h4>
            <p className="text-slate-300 text-sm">
            ¡Lo lograste! 🏆 ¡Has acertado todas las preguntas! Tu conocimiento es impresionante. 🚀
            </p>
        </div>
    </div>
  )
}
