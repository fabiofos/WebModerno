import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Logo from '../components/templates/logo'
import Nav from '../components/templates/nav'
import Footer from '../components/templates/footer'
import {HashRouter} from 'react-router-dom'
import Routes from './routes'

export default props =>
<HashRouter>
     <div className="app">
    <Logo className="logo"/>
    <Nav className="nav" />
<Routes />
    <Footer className="footer" />
 </div>
</HashRouter>

