import React, { Component } from 'react'

export default class Message extends Component {

    constructor(){
        super()
        this.state ={
            message: "welcome visitor"
        }
    }

    Changemess(){
        this.setState({
            message: "thanku for subs"
         } )
        }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={()=> this.Changemess()}>Subscribe</button>
            </div>
        )
    }
}
