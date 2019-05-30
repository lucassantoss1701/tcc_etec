import React, {Component} from 'react'
import * as firebase from 'firebase';

export default class noticiasU extends Component {
    constructor(){
        super();
        this.state = {
            speed: 3
        };
    }
    componentDidMount(){
        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            })
        })
    }

  render() {
    return <div>
        <h1>{this.state.speed}</h1>
    </div>;
  }
}


