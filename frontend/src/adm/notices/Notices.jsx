import React, { Component } from 'react';
import Main from '../../components/template/Main'
import * as firebase from 'firebase'
import { storage } from '../../index'


const headerProps = {
    icon: 'newspaper-o',
    title: 'Noticías',
    subtitle: 'Noticías: Incluir, Listar, Alterar e Excluir!'
}



export default class UnderCrud extends Component {

    constructor() {
        super();

        this.state = {
            title: undefined,
            text: undefined,
            date: undefined,
            image: undefined,
            url: '',
            progress: 0,
        };

        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangee = this.handleChangee.bind(this);
        this.handleChangeData = this.handleChangeData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeImage = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState({image: image});
        }
    }

    handleChangeData(event) {
        this.setState({ date: event.target.value })
    }

    handleChangee(event) {
        this.setState({ text: event.target.value });
        //separar isso
    }

    handleSubmit(event) {
        let notice = {
            title: this.state.title,
            text: this.state.text,
            date: this.state.date,
            image: this.state.image.name,
        };
        alert('A name was submitted: ' + JSON.stringify(notice));
        firebase.database().ref('noticias').push(notice);
        const { image } = this.state;

        const uploadTask = storage.ref(`imagesNoticias/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
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

    componentDidMount() {
        // const rootRef = firebase.database().ref().child('noticias');
        // const titleRef = rootRef.child('id');

        // titleRef.on('value', snap => {
        //     this.setState({
        //         title: snap.val(),
        //         text: snap.val()
        //     })
        // }
        // )
    }


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder="Digite o título...">
                            </input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Data</label>
                            <input type="text" className="form-control"
                                name="date"
                                value={this.state.date}
                                onChange={this.handleChangeData}
                                placeholder="Digite a data...">
                            </input>
                        </div>
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label>Texto</label>
                            <textarea type="text" className="form-control" rows="10"
                                name="text"
                                value={this.state.text}
                                onChange={this.handleChangee}
                                placeholder="Digite o texto..." />
                        </div>
                    </div>
                    <hr />

                    <div className="how">
                        <div className="col-12 d-flex justify-content-end">
                            <button type="submit" id="send" value="submit" className="btn btn-primary" onClick={e => this.handleSubmit()}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
                <hr/>
                <div id="conteiner">
                    <progress value={this.state.progress} max="100" ></progress>
                    <hr />
                    <input type="file" className="btn btn-primary" value={this.state.file} onChange={this.handleChangeImage} />
                    <hr />
                   
                </div>
            </div>

        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
            </Main>
        )
    }
}
