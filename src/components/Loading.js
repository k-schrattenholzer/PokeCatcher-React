import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import './Component.css'

export default class Loading extends Component {
    render() {
        return (
            <div className="Loading">
                <Loader 
                type="Hearts" 
                color="#FFFFFF" 
                height={400} 
                width={400} />
                <h1>fetching poké babies</h1>
            </div>
        )
    }
}
