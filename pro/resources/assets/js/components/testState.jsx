import React from 'react'


export class Greeting extends React.Component {
    constructor(){
        super();
        this.state ={
            name:"rathana"
        }
        //this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e){
        this.setState({
            name:"lana"
        })
    }
    render() {
        return (
            <div>

                <h1>{this.state.name}</h1>
                <button onClick={this.handleClick.bind(this)}>hello</button>
            </div>


        );
    }
}