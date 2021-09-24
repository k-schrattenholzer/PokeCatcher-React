import React, { Component } from 'react'
import SortDropDown from './SortDropDown.js'

export default class SearchSort extends Component {
    render() {
        return (
            <div className='SearchSort'>

                <form onSubmit={this.props.handleSearch}>

                    <input onChange={this.props.handleChange}/>
                    <button>Search</button>

                </form>
                <div className="Sort">
                <SortDropDown
                    options={[
                        'asc',
                        'desc'
                    ]}
                    optionValue='Sort'
                    handleSort={this.props.handleSortOrder}/>

                
                <SortDropDown
                    options={[
                          'bug',
                          'dark',
                          'dragon',
                          'electric',
                          'fairy',
                          'fighting',
                          'fire',
                          'flying',
                          'ghost',
                          'grass',
                          'ground',
                          'ice',
                          'normal',
                          'poison',
                          'psychic',
                          'rock',
                          'steel',
                          'water'
                      ]}
                    optionValue='Filter Type'
                    handleSort={this.handleSortType} />
                </div>
            </div>
        )
    }
}
