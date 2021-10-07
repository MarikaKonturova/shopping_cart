import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/types";
import {Badge, Button, Container, Dropdown, FormControl, Nav, Navbar} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {CardCartType} from "../cart/cart-reducer";
import {HCard} from "./hCard/Hcard";
import './Header.css'
import {useActions} from "../../redux/resux-utils";
import {filterActions} from "../cards/Filter";

export const Header = () => {

    const {filterBySearch} = useActions(filterActions)
    const cart = useSelector<AppRootStateType, CardCartType[]>((state) => state.cart.cart)
    return (
        <Navbar bg='dark' variant='dark' style={{height: 80}}>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className={'search'}>
                    <FormControl
                        style={{width: 500}}
                        placeholder={'Search a product'}
                        className={'m-auto search'}
                        onChange={(e) => {
                            filterBySearch(e.currentTarget.value)
                        }}/>
                </Navbar.Text>
                {/*className="dropdown-menu dropdown-menu-lg-right"*/}
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart color={'white'} fontSize={'25px'}/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minWidth: 370, right: 0, left: "auto"}}
                                       className={'dropdown-menu dropdown-menu-right'}>
                            {cart.length > 0
                                ? (
                                    <>
                                        {cart.map(c => <HCard {...c}/>)}
                                    </>
                                )
                                : (
                                    <span style={{padding: 10}}>Cart is Empty!</span>
                                )}
                            <Link to={'/cart'}>
                                <Button style={{width: "95%", margin: '0 10px'}}>Go to cart</Button>
                            </Link>

                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>


    );
}

