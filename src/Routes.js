import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Header from './Components/Header';

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
