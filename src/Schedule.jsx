import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Schedule() {

    return (
        <div>
            <Button style={{
                color: "white",
                backgroundColor: "black",
                boxShadow: "0px 0px 3px white",
                margin: "30px",
                
            }}>
                <Link to={`/`}>Back to home</Link>
            </Button>
            
        </div>
    );
}

export default Schedule;
