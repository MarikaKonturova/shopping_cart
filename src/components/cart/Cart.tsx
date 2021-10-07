import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/types";
import {CardCartType} from "./cart-reducer";
import {Button, Col, FormControl, Image, ListGroup, Row} from "react-bootstrap";
import "../cards/Cards.css"
import '../cards/Filter/Filters.css'
import {Rating} from "../cards/Filter/Rating/Rating";
import {AiFillDelete} from "react-icons/ai";
import {useActions} from "../../redux/resux-utils";
import {cartActions} from "./index";

export const Cart = () => {
    const cart = useSelector<AppRootStateType, CardCartType[]>((state) => state.cart.cart)
    const {removeFromCart, changeCartQty} = useActions(cartActions)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + +(curr.price) * curr.qty, 0))
    }, [cart])
    return (
        <div className={'cardsPage'}>
            <div className={'cardsPage_container'}>
                <ListGroup>
                    {cart.map(c => (
                        <ListGroup.Item key={c.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={c.image} alt={c.image} fluid rounded/>
                                </Col>
                                <Col md={2}>
                                    <span>{c.name}</span>
                                </Col>
                                <Col md={2}>
                                    <span>{c.price}</span>
                                </Col>
                                <Col md={2}>
                                    <Rating rating={c.ratings}/>
                                </Col>
                                <Col md={2}>
                                    <FormControl as={'select'} value={c.qty}
                                    onChange={(e)=>changeCartQty({id: c.id, qty: Number(e.currentTarget.value)})}
                                    >
                                        {[...Array(c.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </FormControl>
                                </Col>
                                <Col md={2}>

                                <Button type={'button'} variant={'light'} onClick={() => removeFromCart(c.id)}>
                                    <AiFillDelete fontSize={'20px'}
                                                  style={{cursor: 'pointer'}}
                                    />
                                </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className={'filters summary'}>
                    <span className={'title'}>
Subtotal ({cart.length}) items
                    </span>
                <span style={{fontWeight: 700, fontSize: 20}}>
                        Total: $ {total}
                    </span>
                <Button type={'button'} disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
}

