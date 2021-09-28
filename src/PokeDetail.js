import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './components/PokeItem.js'
import PokeInfo from './components/PokeInfo.js'
import Loading from './components/Loading.js'
import Header from './components/Header.js'


export default class PokeDetail extends Component {

    state = {
        pokemon: [],
        areWeLoading: false,
    }

    componentDidMount = async() => {

        try {
            await this.setState({ areWeLoading: true })

            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.pokemonId}`);

            await this.setState({
                pokemon: response.body,
                areWeLoading: false
            })

        } catch(e) {
                await this.setState({ isLoading: false });
        }
    }
    
    render() {

        return (
            <div className="PokeDetail">
                <Header />
                <header>
                    <h3>This is the detail page for: {this.state.pokemon.pokemon}</h3>
                    </header>
                {
                    this.state.areWeLoading
                    ? <Loading />
                    : <PokeItem
                    {...this.state.pokemon} />
                }

                {
                    this.state.areWeLoading
                    ? <Loading />
                    : <PokeInfo
                    {...this.state.pokemon} />
                }
            </div>
        )
    }
}

