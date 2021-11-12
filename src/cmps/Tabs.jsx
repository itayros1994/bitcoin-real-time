import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export  function Tabs() {
    return (
        <div className="tabs-container">
           <Link className="page-link" to="/"><Button id="overview" variant="contained">Overview</Button></Link>
           <Link className="page-link" to="/history"><Button id="history" variant="contained">history</Button></Link>
        </div>
    )
}
