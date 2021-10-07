import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import faker from 'faker'
//only renders 1 type of data (for static data)
faker.seed(99)
const initialState: CardsType = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0,3,4,7,8]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1,2,3,4,5])
}))
export const slice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        fetchCards(state, action: PayloadAction<CardsType>) {
        },
    }, extraReducers: builder => {
    }
})

//export const cardsReducer = slice.reducer
export interface CardType {
    id: string
    name: string
    price: string
    image: string
    inStock: 0|3|4|7|8
    fastDelivery: boolean
    ratings: 1|2|3|4|5

}
export type CardsType = CardType[]
