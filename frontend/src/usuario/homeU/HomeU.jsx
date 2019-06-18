import React from 'react';

import Main from '../../components/template/Main';
import NoticiasU from '../noticiasU/NoticiasU';

export default props =>
    <Main icon="home" title="Início"
        subtitle="Home">
        <div className='display-4'>Bem vindo!</div>
        <hr />
    <NoticiasU/>
    </Main>