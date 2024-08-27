import React from 'react';
import SearchBar from './SearchBar';
import "../styles/Navbar.css";
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar({ searchTerm, setSearchTerm }) {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        navigate(selectedValue);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Task Tracker</h1> 
            </div>

            <select onChange={handleOptionChange} value={currentPath} className='navbar--dropdown'>
              <option value="/">Task Manager</option>
              <option value="/schedule">Schedule Viewer</option>
            </select>
            {
                currentPath === "/" && 
                <div className="navbar-items">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            }
        </nav>
    );
}

export default Navbar;
