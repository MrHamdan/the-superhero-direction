import React, { useEffect, useState } from 'react';
import Usercart from '../Usercart/Usercart';
import Youtuber from '../Youtuber/Youtuber';
import './Data.css';

const Data = () => {
    const [youtubers, setYoutubers] = useState([]);

    const [userCart, setUserCart] = useState([]);

    useEffect(() => {
        fetch('./youtubers.JSON')
            .then(res => res.json())
            .then(data => setYoutubers(data))
    }, [])

    const handleAddToCart = (youtuber) => {
        if (userCart.indexOf(youtuber) === -1) {
            const newCart = [...userCart, youtuber];
            setUserCart(newCart);
        }
    }

    return (
        <div className="data-container">
            <div className="user-container">
                {
                    youtubers.map(youtuber => <Youtuber
                        key={youtuber.key}
                        youtuber={youtuber}
                        handleAddToCart={handleAddToCart}
                    ></Youtuber>)
                }
            </div>
            <div className="user-cart-container">
                <Usercart userCart={userCart}></Usercart>
            </div>
        </div>
    );
};

export default Data;