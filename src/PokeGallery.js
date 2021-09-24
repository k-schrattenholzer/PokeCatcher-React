import React from 'react'
import request from 'superagent'
import Header from './components/Header.js'
import Loading from './components/Loading.js'
import PokeList from './components/PokeList.js'

export default class PokeGallery extends React.Component {

    state = {
        pokemonData: [],
        searchParam: '',
        sortOrder:'asc',
        sortParam: 'pokemon',
        areWeLoading: false,
        page: 1
        }

    componentDidMount = async () => {
       await this.fetch();
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({searchParam: e.target.value});
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.fetch();
    }

    handleSortParam = async (e) => {
        await this.setState({sortParam: e.target.value});
        this.fetch();
    }

    handlePageClick = async (e) => {
        e.preventDefault();
        await this.setState({page: e.target.value});
        this.fetch();
    }

    handleSortOrder = async (e) => {
        e.preventDefault();
        await this.setState({sortOrder: e.target.value});
        this.fetch();
    }

    handleSortBy = async (e) => {
        await this.setState({
            sortParam: e.target.value
        });
       await this.fetch();
    }

    handleReset = async (e) => {
        this.setState ({ 
            searchParam: '',
            sortOrder:'asc',
            sortParam: 'pokemon', })
        await this.fetch()
    }

    fetch = async () => {

        try {
            this.setState({ areWeLoading: true })

            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchParam}&sort=${this.state.sortParam}&direction=${this.state.sortOrder}&page=1&perPage=900`);

            this.setState({
                pokemonData: response.body.results,
                areWeLoading: false
            })

        } catch(e) {
                this.setState({ isLoading: false });
        }
    }

    render() {
        
        return (
            <div className='PokeGallery'>
                <Header
                handleSearch={this.handleSearch}
                handleChange={this.handleChange}
                handleSortOrder={this.handleSortOrder}
                handleSortBy={this.handleSortBy}
                handleReset={this.handleReset}
                />
                {
                    this.state.areWeLoading
                    ? <Loading />
                    : <PokeList
                        pokemonData = {this.state.pokemonData}
                        areWeLoading = {this.state.areWeLoading}/>
                }
                
            </div>
        )
    }
}
