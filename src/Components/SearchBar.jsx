import React, { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import "../styles/SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleIconClick() {
        setIsExpanded(true);
    }

    function handleBlur() {
        if (!searchTerm) {
            setIsExpanded(false);
        }
    }

    return (
        <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
            {!isExpanded && (
                <SearchIcon className="search-icon" onClick={handleIconClick} />
            )}
            
            {isExpanded && (
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    className="search-bar--input"
                />
            )}
        </div>
    );
}

export default SearchBar;
