import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./RoutesComponent";
import s from './Header.module.css'

function Header() {

    const [menu, setMenu] = useState(true)


    return (
        <div className={s.navbar}>
            {
                menu
                    ? <div onMouseOver={()=>setMenu(!menu)}> Menu </div>
                    : <div onMouseLeave={()=> setMenu(!menu)} className={s.openMenu}>
                        <div className={s.links}><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></div>
                        <div className={s.links}><NavLink to={PATH.JUNIOR}>Junior</NavLink></div>
                        <div className={s.links}><NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink></div>
                    </div>
            }
        </div>

    )
}

export default Header
