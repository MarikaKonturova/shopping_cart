import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import './Filters.css'
import {Rating} from "./Rating/Rating";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/types";
import {FilterType} from "./filter-reducer";
import {useActions} from "../../../redux/resux-utils";
import {cartActions} from "../../cart";
import {filterActions} from "./index";

export const Filters = () => {
    const {
        byRating,
        byStock,
        byFastDelivery,
        sort
    } = useSelector<AppRootStateType, FilterType>(state => state.filter)
    const {

        filterByStock,
        clearFilters,
        filterByDelivery,
        filterByRating,
        sortByPrice
    } = useActions(filterActions)

    const [rate, setRate] = useState(5)
    return (
        <div className={'filters'}>
            <span className={'title'}>Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label={'Ascending'}
                    name={'group1'}
                    type={'radio'}
                    id={`inline-1`}
                    onChange={() => sortByPrice('lowToHigh')}
                    checked={sort === 'lowToHigh'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label={'Descending'}
                    name={'group1'}
                    type={'radio'}
                    id={`inline-2`}
                    onChange={() => sortByPrice('highToLow')}
                    checked={sort === 'highToLow'}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label={'Include Out of Stock'}
                    name={'group1'}
                    type={'checkbox'}
                    id={`inline-3`}
                    onChange={() => filterByStock()}
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label={'Fast delivery only'}
                    name={'group1'}
                    type={'checkbox'}
                    id={`inline-4`}
                    onChange={() => filterByDelivery()}
                    checked={byFastDelivery}
                />
            </span>
            <span>
               <label style={{paddingRight: 10}}>Rating: </label>
                <Rating rating={byRating} onClick={(i: number) => filterByRating(i + 1)} style={{cursor: 'pointer'}}/>
            </span>
            <Button variant={'light'} onClick={()=>clearFilters()}>Clear Filters</Button>
        </div>

    );
}

