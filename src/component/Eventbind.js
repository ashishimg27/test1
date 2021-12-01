import React, { Component } from 'react'

export default class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "hello"
        }
    }
    
    clickHandler(){
        this.setState({
            message: "goodbye"
        })
        console.log(this)
    }
    render() {
        return (
            <div>
               <h1> {this.state.message}</h1>
               <button onClick={this.clickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}
