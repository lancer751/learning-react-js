import { Filters } from "./components/Filters"
import { ListOfProducts } from "./components/ListOfProducts"
import { ShoppingCart } from "./components/ShoppingCart"

function App() {
  return (
    <>
      <div className="py-14">
        <div className="text-center">
          <h1 className="text-5xl text-white font-medium">Shop everything do you want</h1>
          <p className="text-gray-200 mt-7">Use the filters below to search products most easy.</p>
        </div>
        
        <Filters/>
      </div>

      <ListOfProducts/>
      <ShoppingCart/>
    </>
  )
}

export default App
