import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from 'react-router-dom'
import RoutesAdm from './RoutesAdm'

import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'; 
import Footer from '../components/template/Footer';
import Header from '../components/template/Header';



export default props => 
    <BrowserRouter>
        <div className="app">
        <Logo/>
        <Header/>
        <Nav/>
        <RoutesAdm/>
        <Footer/>
    </div>
    </BrowserRouter>