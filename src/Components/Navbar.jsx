import React from 'react';
import SearchBar from './SearchBar';
import "../styles/Navbar.css";

function Navbar({ searchTerm, setSearchTerm }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Task Tracker</h1> 
            </div>

            <div className="navbar-items">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </nav>
    );
}

export default Navbar;
