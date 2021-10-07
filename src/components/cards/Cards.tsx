import React from 'react';
import {useSelector} from "react-redux";
import {CardsType} from "./cards-reducer";
import {AppRootStateType} from "../../redux/types";
import {SingleCard} from "./Card/Card";
import './Cards.css'
import {Filters} from "./Filter/Filters";
import {FilterType} from "./Filter/filter-reducer";

export const Cards = () => {

    const cards = useSelector<AppRootStateType, CardsType>(state => state.cards)
    const {sort, byStock, byFastDelivery, byRating, searchQuery} = useSelector<AppRootStateType, FilterType>(state => state.filter)
    const transformProducts = () => {
        let sortedCards = [...cards]
        if (sort) {
            sortedCards = sortedCards.sort((a, b) => (
                sort === 'lowToHigh' ? +(a.price) - +(b.price) : +(b.price) - +(a.price)))
        }
        if (!byStock) {
            sortedCards = sortedCards.filter((c => c.inStock))
        }
        if (byFastDelivery) {
            sortedCards = sortedCards.filter((c => c.fastDelivery))
        }
        if (byRating) {
            sortedCards = sortedCards.filter((c => c.ratings >= byRating))
        }
        if (searchQuery) {
            sortedCards = sortedCards.filter((c => c.name.toLowerCase().includes(searchQuery)))
        }
        return sortedCards
    }
    return (<div className='cardsPage'>
            <Filters/>
            <div className='cardsPage_container'>
                {transformProducts().map(card => {
                    return <SingleCard {...card} key={card.id}/>
                })
                }
            </div>
        </div>
    )
}
