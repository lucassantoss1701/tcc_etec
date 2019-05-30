import React from 'react';

import { Switch, Route, Redirect } from 'react-router'

import HomeU from '../usuario/homeU/HomeU'
import CursosU from '../usuario/cursosU/CursosU'
import ContatoU from '../usuario/contatoU/ContatoU'
import GaleriaU from '../usuario/galeriaU/GaleriaU'
import Login from '../usuario/loginU/Login'


export default props =>
    <Switch>
        <Route exact path='/' component={HomeU}></Route>
        <Route path='/cursosU' component={CursosU}></Route>
        <Route path='/contatoU' component={ContatoU}></Route>
        <Route path='/galeriaU' component={GaleriaU}></Route>
        <Route path='/login' component={Login}></Route>


        <Redirect from='*' to='/'></Redirect>
    </Switch>