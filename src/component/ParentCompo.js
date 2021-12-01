import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

export default class ParentCompo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : "Parent"
        }


        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(){
        alert(`hello ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
               <ChildCompo greetHandler = {this.greetParent} /> 
            </div>
        )
    }
}
