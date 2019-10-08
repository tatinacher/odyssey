import React, { Component } from "react";
import { Link } from 'react-router-dom';

import '../styles/HeaderView.scss';

class HeaderView extends Component {
    render() {
        return (
            <header className="top-header">
                <nav>
                    <ul className="navigation">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/photos'>Gallery</Link></li>
                        <li><Link to='/journal'>Journal</Link></li>
                        <li><Link to='/books'>Books</Link></li>
                        <li><Link to='/sculptures'>Sculptures</Link></li>
                        <li><Link to='/ancient-greece'>Античная Греция</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderView;