import React from 'react';

import './FotosGaleria.css'
import etec1 from '../../assets/images/etec1.jpg'
import etec2 from '../../assets/images/etec2.jpg'
import bolo from '../../assets/images/bolo.jpg'


export default props =>
    <div id="conteiner">
        <div className="">
        <img className="fotos"
                src={etec1}
                alt="First slide"
            />
        <img className="fotos"
                src={etec2}
                alt="First slide"
        />
        <img className="fotos"
                src={etec2}
                alt="First slide"
        />
        <img className="fotos"
                src={bolo}
                alt="First slide"
        />
        </div>
    </div>
