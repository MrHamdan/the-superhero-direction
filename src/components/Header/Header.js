import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1><span className="text-color-1">You</span><span className="text-color-2">Tubers</span>       <span className="text-color-3">Analytics</span></h1>
            <h2 className="site-detail-text-color">View the daily YouTube analytics, Make your own YouTube show with them or be their Sponsors!!!</h2>
            <h3><span className="text-color-1">Total</span>           <span className="text-color-2">Budget</span> <span className="text-color-3">  :150 Million</span></h3>
        </div>
    );
};

export default Header;