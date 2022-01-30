import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./RoutesComponent";

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
        </div>
    )
}

export default Header
