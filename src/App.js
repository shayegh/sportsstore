import React, {Component} from "react";
import {SportsStoreDataStore} from "./data/DataStore";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";

export class App extends Component {
    render() {
        return (
            <Provider store={SportsStoreDataStore}>
                <Router>
                    <Switch>
                        <Route path="/shop" component={ShopConnector}/>
                        <Redirect to="/shop"/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;
