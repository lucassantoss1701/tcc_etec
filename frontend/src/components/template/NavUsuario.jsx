import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Home
                </Link>
            <Link to="/cursosU">
                <i className="fa fa-book"></i> Cursos
            </Link>
            <Link to="/galeriaU">
                <i className="fa fa-picture-o"></i> Galeria
            </Link>
            <Link to ="/contatoU">
                <i className="fa fa-phone"></i> Contato
            </Link>
            <a href="https://www.vestibulinhoetec.com.br/home/" rel="noopener noreferrer" target="_blank" >
                <i className="fa fa-info-circle"> </i> Vestibulinho
            </a>
            <a href="https://nsa.cps.sp.gov.br/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-shield"> </i> NSA
            </a>
            <a href="http://www.fatec.sp.gov.br/view/Default.aspx" rel="noopener noreferrer" target="_blank" >
                <i className="fa fa-envelope"> </i> Institucional
            </a>
            <Link to ="/login">
                <i className="fa fa-user"></i> Login
            </Link>

        </nav>
    </aside>