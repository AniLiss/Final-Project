import React, {Component} from 'react';
import MenuCollection from '../views/menu__collection';
import MenuSearch from '../containers/menu__search'
import Logotype from '../views/logotype';

class Aside extends Component {
    render() {
        return (
            <aside className="menu">
                <div className="header__logo-wrapper">
                    <Logotype />
                </div>

                <MenuCollection />

                <MenuSearch search_item={this.props.items}/>
            </aside>
        )
    }
}

export default Aside;