import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* Heading */}
            <h1><span className="text-color-1">You</span><span className="text-color-2">Tubers</span>       <span className="text-color-3">Analytics</span></h1>
            {/* Motto */}
            <h2 className="site-detail-text-color">You can hire your favorite YouTuber for your company Brand Ambassador Or Make your own YouTube show with them and be their Sponsors!!!</h2>
            <h3><span className="text-color-1">Total</span>           <span className="text-color-2">Budget</span> <span className="text-color-3">  :150 Million</span></h3>
        </div>
    );
};

export default Header;