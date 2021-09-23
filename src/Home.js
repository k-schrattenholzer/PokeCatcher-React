import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Honeyyy We're Home!</h1>
                
                <Link to='/gallery'>
                  check out the gallery  
                </Link>
            </div>
        )
    }
}
