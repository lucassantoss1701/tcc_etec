import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'
import RoutesUser from './RoutesUser'

import NavUsuario from '../components/template/NavUsuario'
import Logo from '../components/template/Logo'; 
import Footer from '../components/template/Footer';
import Header from '../components/template/Header';



export default props => 
    <BrowserRouter>
        <div className="app">
        <Logo/>
        <Header/>
        <NavUsuario/>
        <RoutesUser/>
        <Footer/>
    </div>
    </BrowserRouter>