import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import {Link} from 'react-router';

const MenuSearch = React.createClass({
    getInitialState() {
        return {searchTerm: ''}
    },

    searchUpdated(term) {
        this.setState({searchTerm: term})
    },

    render() {
        const SEARCH_ITEMS = this.props.search_item;
        const KEYS_TO_FILTERS = ['title'];

        const filteredMenu = SEARCH_ITEMS.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return (
            <div className="search menu__search">

                <div className="search__input">
                    <SearchInput type="search" autoComplete="off" placeholder="Search for a property"
                                 onChange={this.searchUpdated}/>
                </div>
                <ul className="search__list" id="animation-properties">
                    {filteredMenu.map((item) => {
                        return <li className="search__item" key={item.title}>
                            <Link href={"#" + item.title} data-hover={item.title}>{item.title}</Link>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
})

export default MenuSearch;