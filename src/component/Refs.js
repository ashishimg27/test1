import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
        super(props)
    this.refInput =  React.createRef()
    }
    
componentDidMount(){
    this.refInput.current.focus()
    console.log(this.refInput)
}

clickHandler =()=>{
    alert( this.refInput.current.value)
}

    render() {
        return (
            <div>
                <input type='text' ref={this.refInput}/>
                <button onClick={this.clickHandler}>Click</button>

            </div>
        )
    }
}

export default Refs
