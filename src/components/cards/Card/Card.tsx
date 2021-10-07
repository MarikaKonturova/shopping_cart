import React from 'react';
import {CardType} from "../cards-reducer";
import './Card.css'
import {Button, Card} from 'react-bootstrap'
import {Rating} from "../Filter/Rating/Rating";
import {AppRootStateType} from "../../../redux/types";
import {useSelector} from "react-redux";
import {CardCartType} from "../../cart/cart-reducer";
import {useActions} from "../../../redux/resux-utils";
import {cartActions} from "../../cart";

export const SingleCard = (props: CardType) => {
    const cart = useSelector<AppRootStateType, CardCartType[]>(state => state.cart.cart)
    const {addToCart, removeFromCart} = useActions(cartActions)
    const addToCartHandler = () => {
        addToCart(props)
    }
    const removeFromCartHandler = () => {
        removeFromCart(props.id)
    }
    return (
        <div className={'cards'}>
            <Card>
                <Card.Img variant={'top'} src={props.image} alt={props.name}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom: 10}}>
                        <span>$ {props.price.split('.')[0]}</span>
                        {props.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 days delivery</div>
                        )}
                        <Rating rating={props.ratings}/>
                    </Card.Subtitle>
                    {
                        cart.some(c => c.id === props.id) ?
                            (<Button onClick={removeFromCartHandler} variant={'danger'}>
                                Remove from cart
                            </Button>)
                            : (
                                <Button onClick={addToCartHandler} disabled={!props.inStock}>
                                    {!props.inStock ? 'Out of Stock' : 'Add to Cart'}
                                </Button>
                            )
                    }
                </Card.Body>
            </Card>
        </div>



        /*<div className='card'>
            <h1 className='card_name'>{props.name}</h1>
            <img src={props.image} className='card_img'/>
            <p className='card_ratings'>{props.ratings}</p>
            <p className='card_price'> prise is {props.price}</p>
            <button className='card_button'>add to cart</button>
        </div>*/
    );
}
