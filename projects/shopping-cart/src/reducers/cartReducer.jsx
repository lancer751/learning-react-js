export const initialState = JSON.parse(window.localStorage.getItem('shopping-cart')) || []

export const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY'
}

const updateLocalStorage = (cart) => {
    window.localStorage.setItem('shopping-cart', JSON.stringify(cart))
}

export function cartReducer(state, action){
    const {type, playload} = action
    console.log(state)
    switch(type){
        case CART_ACTIONS.ADD_TO_CART:{
            const {id} = playload
            const productCartIndex = state.findIndex(product => product.id === id)

            if(productCartIndex >= 0){
                const newState = structuredClone(state)
                newState[productCartIndex].quantity += 1
                updateLocalStorage(newState)
                return newState
            }

            const newState = [
                ...state, 
                {
                    ...playload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }
        case CART_ACTIONS.DELETE_FROM_CART: {
            const {id} = playload
            const newState = state.filter(product => product.id !== id) 
            updateLocalStorage(newState)
            return newState
        }
        case CART_ACTIONS.DECREASE_QUANTITY: {
            const {id} = playload
            const productCartIndex = state.findIndex(product => product.id === id)

            if(state[productCartIndex].quantity > 1){
                const newState = structuredClone(state) 
                newState[productCartIndex].quantity -= 1
                updateLocalStorage(newState)
                return newState
            }

            return state
        }
        case CART_ACTIONS.CLEAR_CART: {
            updateLocalStorage([])
            return []
        }
    }
    return state
}