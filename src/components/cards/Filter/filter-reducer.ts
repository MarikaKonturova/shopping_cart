import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type FilterType = {
    byStock: boolean,
    byFastDelivery: boolean,
    byRating: number,
    searchQuery: string,
    sort: string
}
const initialState: FilterType = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '', sort: ""
}
export const slice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        sortByPrice(state, action: PayloadAction<string>) {
            return {...state, sort: action.payload}
        },
        filterByStock(state, action: PayloadAction) {
            return {...state, byStock: !state.byStock}
        },
        filterByDelivery(state, action: PayloadAction) {
            return {...state, byFastDelivery: !state.byFastDelivery}
        },
        filterByRating(state, action: PayloadAction<number>) {
            return {...state, byRating: action.payload}
        },
        filterBySearch(state, action: PayloadAction<string>) {
            return {...state, searchQuery: action.payload}
        },
        clearFilters(state, action: PayloadAction) {
            return {
                ...state, byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: '',
                sort: ""
            }
        },
    }
})
