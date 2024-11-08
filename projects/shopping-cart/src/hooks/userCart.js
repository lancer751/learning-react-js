import { useContext } from "react";
import { CartContext } from "../contexts/cartProducts";

export function useCart(){
    const context = useContext(CartContext)

    if(context === undefined){
        throw new Error('useCart must be within CartContext.Provider')
    }

    return context
}