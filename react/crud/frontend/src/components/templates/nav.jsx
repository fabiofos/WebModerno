import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

export default props =>
<aside className="menu-area">
    <nav className="menu">
    <Link to="/">
        <i className="fa fa-home"></i> Inicio
    </Link>
    <Link to="/Users">
        <i className="fa fa-users"></i> Users
    </Link>
    </nav>
</aside>