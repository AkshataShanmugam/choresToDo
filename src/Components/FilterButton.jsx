// components/FilterButton.js
import React from 'react';
import { Button } from '@mui/material';

function FilterButton({ filterComplete, onClick }) {
  return (
    <Button
      variant="contained"
      style={{
        display: "block",
        marginRight: "20px",
        marginLeft: "auto",
        color: "white",
        backgroundColor: "black",
        boxShadow: "0px 0px 5px white"
      }}
      onClick={onClick}
    >
      Show {filterComplete ? "Completed" : "Not Completed"}
    </Button>
  );
}

export default FilterButton;
    