import React from 'react'

import Main from '../../components/template/Main'

export default props =>
    <Main icon="phone" title="Contato"
        subtitle="Nosso contato">
        <div className='display-4'>Aqui estão formas de nos contatar!</div>
        <hr />
        <p className="mb-0">Telefone, Email, Localização</p>
        <hr />
        <br />
        <hr />
        <p className="mb-0" align="center">Telefone: (19) 3441-8838</p>
        <hr />
        <p className="mb-0" align="center">E-mail: e104dir@cps.sp.gov.br <hr /> E-mail e104acad@cps.sp.gov.br</p>
        <hr />
        <p className="mb-0" align="center"> <a href="https://www.google.com/maps/place/ETEC+Artur+Nogueira/@-22.5625985,-47.1650885,17z/data=!3m1!4b1!4m5!3m4!1s0x94c88cecfe5cfd65:0x69a255912bf4c253!8m2!3d-22.5625985!4d-47.1628998" rel="noopener noreferrer" target="_blank"> Localização</a></p>
    </Main>

