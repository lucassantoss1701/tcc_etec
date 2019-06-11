import React, { Component } from 'react'
import Main from '../../components/template/Main'
import { storage } from '../../index'
import * as firebase from 'firebase'

export default class Galeria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: undefined,
            url: '',
            progress: 0,
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUptade = this.handleUptade.bind(this);

    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
        //separar isso
    }

    handleUptade = () => {
        const { image } = this.state;
        let fotos ={
            image: this.state.image.name
        }
        firebase.database().ref('fotos').push(fotos);

        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress});
            },
            (error) => {
                console.log(error);

            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                })
            })
    }


    render() {
        return (
            <Main>
                <div id="conteiner">
                        <progress  value={this.state.progress} max="100" ></progress>
                    <hr />
                    <input type="file" className="btn btn-primary" onChange={this.handleChange} />
                    <hr/>
                    <button onClick={this.handleUptade} className="btn btn-primary"> Enviar</button>
                </div>
            </Main>
        )
    }
}
