import React from 'react';

import {Route, Switch} from 'react-router'

import UserPage from './UserPage'
import AdmPage from './AdmPage'


export default props =>
    <Switch>
        <Route exact path='/' component={UserPage}></Route>
        <Route path='/home ' component={AdmPage}></Route>

        <Route path='/cursosU' component={UserPage}></Route>
        <Route path='/contatoU' component={UserPage}></Route>
        <Route path='/galeriaU' component={UserPage}></Route>
        <Route path='/login' component={UserPage}></Route>
        <Route path='/noticiaAberta' component={UserPage}></Route>

        <Route path='/home' component={AdmPage}></Route>
        <Route path='/users' component={AdmPage}></Route>
        <Route path='/noticias' component={AdmPage}></Route>
        <Route path='/galeria' component={AdmPage}></Route>
        <Route path='/cursos' component={AdmPage}></Route>
        <Route path='/delnoticias' component={AdmPage}></Route>
    </Switch>
