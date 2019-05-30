import React from 'react'

import Main from '../../components/template/Main'

export default props =>
    <Main icon="book" title="Cursos"
        subtitle="Área de notícias">
        <div className='display-4'>Dê uma olhada em nossos cursos!</div>
        <hr />
        <p className="mb-0">Cursos oferecidos pela nossa unidade!</p>
        <hr />
        <br />
        <hr />
        <p className="mb-0" align="center"> <a href="https://www.vestibulinhoetec.com.br/unidades-cursos/curso.asp?c=501" rel="noopener noreferrer" target="_blank" >Administração</a></p>
        <hr />
        <p className="mb-0" align="center"> <a href="https://www.vestibulinhoetec.com.br/unidades-cursos/curso.asp?c=1500" rel="noopener noreferrer" target="_blank"> Desenvolvimento de Sistemas</a></p>
        <hr />
        <p className="mb-0" align="center"> <a href="https://www.vestibulinhoetec.com.br/unidades-cursos/curso.asp?c=511" rel="noopener noreferrer" target="_blank"> Logística</a></p>
    </Main>