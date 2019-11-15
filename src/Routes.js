import React from 'react';
import {BrowserRouter, Route, } from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';

export default function Router(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/sobre" component={Sobre} />
        </BrowserRouter>
    );
};