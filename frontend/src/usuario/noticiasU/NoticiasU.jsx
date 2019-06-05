import React, { Component } from 'react'
import Main from '../../components/template/Main'
import etec1 from '../../assets/images/etec1.jpg'
import './divNoticias.css'

var i = 0;
const now = new Date();

export default class noticiasU extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {

  }

  renderNotices() {
    for (i = 0; i < 10; i++) {
      return (
        <div className="conteeiner">
          <div className="caixaaa">
            <div className="imagem">
            <img className="fotosss"
                src={etec1}
                alt="First slide"
            />
              <div className = "resto">
                <p>Título: {this.props.title}</p>
                <p> Data: {now.getDate()+"/"+ (now.getMonth()+1)+"/"+ now.getFullYear()} </p>
              </div>
              <button type="button" id ="btn" className="btn btn-primary"> Ver mais!</button>
            </div>
  
          </div>  
        </div>
      )

    }
  }

  render() {
    return (
      <Main>
        {this.renderNotices()}
      </Main>
    )
  }
}