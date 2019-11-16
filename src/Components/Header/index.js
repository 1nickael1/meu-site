import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default function Header() {
    return (
        <div className="container">
            <div className="menu">
                <p>Alguma logo aqui</p>
                <NavLink activeClassName="rota" exact to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="rota" to="/sobre">
                    Sobre
                </NavLink>
            </div>
        </div>
    );
}
