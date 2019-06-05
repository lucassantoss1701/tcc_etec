import React, { Component } from 'react'
import Main from '../../components/template/Main'
import etec1 from '../../assets/images/etec1.jpg'
import './divNoticias.css'
import * as firebase from 'firebase'

const now = new Date();


export default class noticiasU extends Component {
  constructor() {
    super();
    this.state = {
      notices: [],
    };
  }
  componentDidMount() {
    let ref = firebase.database().ref('/noticias');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      let thiz = this;
      Object.getOwnPropertyNames(state).forEach(function(val, idx, array) {
        console.log(state[val]);
        thiz.state.notices.push(state[val])
      });
      console.log(this.state);
    });
  }



  renderNotices() {

      const Ru = this.state.notices.map(function(item){
        return <li>{item}</li>;
      })
      console.log(this.item)
      return (
        
        <ul>{Ru}</ul>,
        <div className="conteeiner">
          <div className="caixaaa">
            <div className="imagem">
              <img className="fotosss"
                src={etec1}
                alt="First slide"
              />
              <div className="resto">
                <p>Título: {this.props.title}</p>
                <p> Data: {now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear()} </p>
              </div>
              <button type="button" id="btn" className="btn btn-primary"> Ver mais!</button>
            </div>

          </div>
        </div>
      )
  }

  render() {
    return (
      <Main>
        <h1>{this.notices}</h1>
        {this.renderNotices()}
      </Main>
    )
  }
}