import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

export default class Loading extends Component {
    render() {
        return (
            <div>
                
                <Loader 
                type="Hearts" 
                color="#FFFFFF" 
                height={50} 
                width={50} />
                <h1>fetching poké babies</h1>
            </div>
        )
    }
}
