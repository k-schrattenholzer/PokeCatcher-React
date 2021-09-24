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
                sort:
                <SortDropDown
                    options={[
                        'asc',
                        'desc'
                        ]}
                    optionValue=''
                    handleSort={this.props.handleSortOrder}/>

                sort by:
                <SortDropDown
                    options={[
                        'pokemon',
                        'type',
                        'shape',
                        'ability'
                        ]}
                    optionValue=''
                    handleSort={this.props.handleSortType} />
                </div>
            </div>
        )
    }
}
