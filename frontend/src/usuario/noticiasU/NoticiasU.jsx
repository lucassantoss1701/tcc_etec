import React, { Component } from 'react'
import Main from '../../components/template/Main'
import './divNoticias.css'
import * as firebase from 'firebase'
import { storage } from '../../index'
import { Route, Switch, Link } from 'react-router-dom'
import etec1 from '../../assets/images/etec1.jpg'
import etec2 from '../../assets/images/etec2.jpg'
import etec3 from '../../assets/images/etec3.jpg'
import Carousel from 'react-bootstrap/Carousel'

export default class noticiasU extends Component {
    constructor() {
        super();
        this.state = {
            notices: [],
        };
    }
    componentDidMount() {
        let ref = firebase.database().ref('/noticias')
        let thiz = this;
        ref.orderByKey().on('value', snapshot => {
            const state = snapshot.val();
            let tempState = {
                notices: []
            };
            Object.getOwnPropertyNames(state).forEach(function (val, idx, array) {
                console.log('image', state[val].image);
                state[val].id = val;
                storage.ref('imagesNoticias/').child(state[val].image).getDownloadURL().then(function (url) {
                    state[val].url = url
                    console.log(url)
                    tempState.notices.push(state[val]);
                    thiz.setState(tempState);
                    thiz.forceUpdate();
                }).catch(function (error) {

                });
            });
        });
    }

    abrirNoticias(id) {

    }

    renderNotice(props, index) {

        return <div key={index} className="caixaaa">
            <div className="imagem">
                <img className="fotosss"
                    src={props.url}
                    alt="imagem" />
                <div className="resto">
                    <p>Título: {props.title}</p>
                    <p> Data: {props.date} </p>
                </div>
                <Link to="/noticiaAberta">
                    <button type="button" id="btn" className="btn btn-primary" onClick={e => this.abrirNoticias(props.id)}> Leia mais!</button>
                </Link>
            </div>
        </div>
    }

    renderCarosel() {
        return (
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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={etec3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }

    renderNotices() {
        return (
            <div className="conteeiner">
                {this.state.notices.map((notice, index) => this.renderNotice(notice, index))}
            </div>
        )
    }

    render() {
        return (
            <div className="conteeiner">
                {this.renderCarosel()}
                <hr></hr>
                <div>
                    {this.renderNotices()}
                </div>
            </div>
        )
    }
}