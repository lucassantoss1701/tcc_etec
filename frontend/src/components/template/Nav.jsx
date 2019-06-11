import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/home">
                <i className="fa fa-home"></i> Home
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
            <Link to="/cursos">
                <i className="fa fa-book"></i> Cursos
            </Link>
            <Link to="/noticias">
                <i className="fa fa-newspaper-o"></i> Notícias
            </Link>
            <Link to="/delnoticias">
                <i className="fa fa-newspaper-o"></i> Excluir Notícias
            </Link>
            <Link to="/galeria">
                <i className="fa fa-picture-o"></i> Galeria
            </Link>
            <a href="/">
                <i className="fa fa-laptop"></i> Site
            </a>
        </nav>
    </aside>