import React from 'react'
import './Hcard.css'
import {CardCartType} from "../../cart/cart-reducer";
import {AiFillDelete} from "react-icons/ai";
import {useActions} from "../../../redux/resux-utils";
import {cartActions} from "../../cart";

export const HCard = (c: CardCartType) => {
    const {removeFromCart} = useActions(cartActions)
    return <>
    <span className={'hCard'} key={c.id}>
        <img
            src={c.image}
            className={'hCard_image'}
            alt={c.name}
        />
        <div className={'hCard_detail'}>
            <span>{c.name}</span>
            <span>$ {c.price.split('.')[0]}</span>
        </div>
        <AiFillDelete fontSize={'20px'}
                      style={{cursor: 'pointer'}}
                      onClick={() => removeFromCart(c.id)}/>
    </span>
    </>
}
