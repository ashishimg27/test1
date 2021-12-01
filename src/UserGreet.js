import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {
        if(this.state.isLoggedin){
            return <div> welcome ash</div>
        }
        
        else{
            return <div> welcome guest</div>
        } 
    }
}

export default UserGreet
