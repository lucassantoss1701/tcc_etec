import React from 'react';

import { Switch, Route, Redirect } from 'react-router'

import Home from '../adm/home/Home'
import Notices from '../adm/notices/Notices'
import Galeria from '../adm/galeria/Galeria'
import Cursos from '../adm/cursos/Cursos'
import DelNotices from '../adm/deleteNotices/deleteNotices'


export default props =>
    <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/noticias' component={Notices}></Route>
        <Route path='/galeria' component={Galeria}></Route>
        <Route path='/cursos' component={Cursos}></Route>
        <Route path='/delnoticias' component={DelNotices}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>