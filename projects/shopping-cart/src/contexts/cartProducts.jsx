/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import { cartReducer, initialState, CART_ACTIONS } from "../reducers/cartReducer";


export const CartContext = createContext()

export function CartProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (product) => {
        return dispatch({
            type: CART_ACTIONS.ADD_TO_CART,
            playload: product
        })
    }

    const deleteFromCart = (product) => {
        return dispatch({
            type: CART_ACTIONS.DELETE_FROM_CART,
            playload: product
        })
    }

    const clearCart = () => {
        return dispatch({type: CART_ACTIONS.CLEAR_CART})
    }

    const decreaseQuantity = (product) => {
        return dispatch({
            type: CART_ACTIONS.DECREASE_QUANTITY,
            playload: product
        })
    }
    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            deleteFromCart,
            clearCart,
            decreaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}