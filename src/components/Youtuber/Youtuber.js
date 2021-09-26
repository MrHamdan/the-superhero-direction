import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './Youtuber.css';

const Youtuber = (props) => {
    // console.log(props)
    const { name, role, img, age, country, salary } = props.youtuber;
    const buttonCartIcon = <FontAwesomeIcon icon={faUserPlus} />

    return (
        <div className="youtuber">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
            <h3>Age: {age}</h3>
            <h3>Country: {country}</h3>
            <h3>Salary: ${salary}</h3>
            <button onClick={() => props.handleAddToCart(props.youtuber)}>{buttonCartIcon} Click To Add</button>
            <br />
            <span><i className="fab fa-facebook-square"></i></span>    <span><i className="fab fa-twitter-square"></i></span>
        </div>
    );
};

export default Youtuber;