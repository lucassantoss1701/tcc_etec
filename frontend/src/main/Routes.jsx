import React from 'react';

import { Switch, Route, Redirect } from 'react-router'
import Home from '../components/home/Home'
import HomeU from '../components/homeU/HomeU'
import UserCrud from '../components/user/UserCrud'
import Notices from '../components/notices/Notices'
import CursosU from '../components/cursosU/CursosU'
import ContatoU from '../components/contatoU/ContatoU'


export default props =>
    <Switch>
        <Route exact path='/' component={HomeU}></Route>
        <Route path='/cursosU' component={CursosU}></Route>
        <Route path='/contatoU' component={ContatoU}></Route>


        <Route path='/home' component={Home}></Route>
        <Route path='/users' component={UserCrud}></Route>
        <Route path='/notices' component={Notices}></Route>
        <Redirect from='*' to='/'></Redirect>
    </Switch>