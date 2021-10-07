import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CardType} from "../cards/cards-reducer";

export interface CardCartType extends CardType {
    qty: number
}
const initialState  = {
    cart:[] as CardCartType[]
}
export const slice = createSlice({
    name:'cards',
    initialState,
    reducers:{
        setTotalPrice(state, action:PayloadAction<number>){
            return {...state, totalPrice:action.payload }
        },
        setTotalCount(state, action:PayloadAction<number>){
            return {...state, totalCount:action.payload }
        },
        addToCart(state, action:PayloadAction<CardType>){
            return {...state, cart:[...state.cart , {...action.payload, qty: 1}] }
        },
        removeFromCart(state, action:PayloadAction<string>){
            return {...state, cart:state.cart.filter(c=> c.id!== action.payload) }
        },
        changeCartQty(state, action:PayloadAction<{id: string, qty: number}>){
            const index = state.cart.findIndex(c => c.id === action.payload.id)
            state.cart[index].qty = action.payload.qty
        }
    }
})
