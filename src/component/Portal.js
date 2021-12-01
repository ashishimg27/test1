import React from 'react'
import ReactDOM from 'react-dom'

export default function Portal() {
    return ReactDOM.createPortal (
        
            <h1>
                portal demo
            </h1>,
        document.getElementById('Portal-root')
        
    )
}
