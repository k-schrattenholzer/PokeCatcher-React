import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    NavLink, 
    Route, 
} from 'react-router-dom';
import PokeDetail from './PokeDetail.js';
import PokeGallery from './PokeGallery.js';
import Home from './Home.js';


export default class App extends Component {
    render() {
        return (
            <div >
                <Router>
                    <NavLink exact activeClassName="active" 
                    to='/'
                    className="NavLink">home</NavLink>
                    <NavLink exact activeClassName="active" 
                    to='/Gallery'
                    className="NavLink">pokedex</NavLink>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/Gallery" 
                            exact
                            render={(routerProps) => <PokeGallery {...routerProps} />} 
                        />
                        <Route 
                            path="/pokedex/:pokemonId" 
                            exact
                            render={(routerProps) => <PokeDetail {...routerProps} />} 
                        />
                </Router>
            </div>
        )
    }
}
