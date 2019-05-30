import React from 'react'

import Main from '../../components/template/Main'
import FotosGaleria from '../../components/componentsSite/FotosGaleria'

export default props =>
    <Main icon="picture-o" title="Galeria"
        subtitle="Nossa galeria de fotos!">
        <div className='display-4'>Confira fotos de nossa Instituição!</div>
        <hr />
        <FotosGaleria/>
      
    </Main>
    


