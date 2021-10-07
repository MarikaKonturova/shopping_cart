import React from 'react';
import './components/header/Header.css';
import {Header} from "./components/header/Header";
import {Cards} from "./components/cards/Cards";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Cart} from "./components/cart/Cart";
import './App.css'
function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <Switch>
                    <Route exact path={'/'} render={() => <Cards/>}/>
                    <Route path={'/cart'} render={() => <Cart/>}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect from={'*'} to={'/404'}/>
                </Switch>
            </div>
        </div>
    );
}

export default withRouter(App)
