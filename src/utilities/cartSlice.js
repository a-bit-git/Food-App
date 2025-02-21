import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : "Cart",
    initialState : {
        items : [],
    },
    reducers : {
        // mutating the states here
        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        removeItem : (state, action) => {
            state.items.pop()
        },
        clearCart : (state, action) => {
            state.items.length = 0
        },
    }
})

// cartSlice returns a big object of actions and their corresponditing states
export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer
