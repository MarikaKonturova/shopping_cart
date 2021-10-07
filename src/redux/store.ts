import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cardsReducer} from "../components/cards";
import {appReducer} from "../components/app";
import {cartReducer} from "../components/cart";
import {filterReducer} from "../components/cards/Filter";

export const rootReducer = combineReducers({
    cards: cardsReducer,
    cart: cartReducer,
    app: appReducer,
    filter: filterReducer
})
export const store = configureStore({
    reducer: rootReducer
})
