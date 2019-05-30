import React from 'react';

import { Switch, Route, Redirect } from 'react-router'

import Home from '../adm/home/Home'
import UserCrud from '../adm/user/UserCrud'
import Notices from '../adm/notices/Notices'
import Galeria from '../adm/galeria/Galeria'
import Cursos from '../adm/cursos/Cursos'


export default props =>
    <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/users' component={UserCrud}></Route>
        <Route path='/noticias' component={Notices}></Route>
        <Route path='/galeria' component={Galeria}></Route>
        <Route path='/cursos' component={Cursos}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>