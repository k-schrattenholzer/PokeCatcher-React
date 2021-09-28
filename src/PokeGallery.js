import React from 'react'
import './App.css';
import request from 'superagent'
import NavHeader from './components/NavHeader.js'
import Loading from './components/Loading.js'
import PokeList from './components/PokeList.js'
import SearchSort from './components/SearchSort.js'
import Footer from './components/Footer.js';

export default class PokeGallery extends React.Component {

    state = {
        pokemonData: [],
        searchParam: '',
        sortOrder:'asc',
        sortParam: 'pokemon',
        areWeLoading: false,
        currentPage: 1
        }

    componentDidMount = async () => {
       await this.fetch();
    }
    
    handleChange = async (e) => {
        e.preventDefault();
        await this.setState({searchParam: e.target.value});
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

    handleNextPage = async () => {
        await this.setState({currentPage: this.state.currentPage + 1})
        this.fetch();
    }

    handlePrevPage = async () => {
        await this.setState({currentPage: this.state.currentPage - 1})
        this.fetch();
    }

    handleReset = async (e) => {
        await this.setState ({ 
            searchParam: '',
            sortOrder:'asc',
            sortParam: 'pokemon', })
        await this.fetch()
    }

    fetch = async () => {

        try {
            await this.setState({ areWeLoading: true })

            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchParam}&sort=${this.state.sortParam}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=20`);

            await this.setState({
                pokemonData: response.body.results,
                areWeLoading: false
            })

        } catch(e) {
                await this.setState({ isLoading: false });
        }
    }

    render() {
        
        return (
            <div className='PokeGallery'>
                <div className='HContainer'>
                    <NavHeader

                    />
                    <SearchSort
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}
                    handleSortOrder={this.handleSortOrder}
                    handleSortBy={this.handleSortBy}
                    handleReset={this.handleReset} />
                </div>
                
                {
                    this.state.areWeLoading
                    ? <Loading />
                    : <PokeList
                        pokemonData = {this.state.pokemonData}
                        areWeLoading = {this.state.areWeLoading}/>
                }
                
                <Footer
                    handleNextPage={this.handleNextPage}
                    handlePrevPage={this.handlePrevPage}
                    currentPage={this.state.currentPage}/>
            </div>
        )
    }
}
