import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import etec1 from  '../../assets/images/etec1.jpg'
import etec2 from  '../../assets/images/etec2.jpg'

import Main from '../template/Main';

export default props =>
    <Main icon="home" title="Início"
        subtitle="Home">
        <div className='display-4'>Bem vindo!</div>
        <hr />
        <p className="mb-0">Aqui você encontra informações sobre a escola!</p>
        <p></p>

    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={etec1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={etec2}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>

    </Main>