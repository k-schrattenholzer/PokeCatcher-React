import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Wanna see some pokés?</h1>
                
                <Link to='/gallery'>
                  check out the pokedex  
                </Link>
            </div>
        )
    }
}
