import React from 'react';
import Detail from "./Detail"

class Home extends React.Component{

constructor(props){

    super(props);
    this.state = {
        title:'Laboratorio4'
    }
    this.ChangeState = this.ChangeState.bind(this);

}

ChangeState(){

this.setState({title:'Aplicaciones de Vanguardia'});

}


render(){
    return <div>
        <h1> Home {this.state.title}<br></br></h1>
        <Detail detailTitle='First Exercise' />
        <button onClick={this.ChangeState}>Click me</button>
        </div>
}

}

export default Home;