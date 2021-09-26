import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import './Usercart.css';

const Usercart = (props) => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const salaryIcon = <FontAwesomeIcon icon={faMoneyBillAlt} />
    const { userCart } = props;
    const users = props.userCart;
    let total = 0;
    for (const youtuber of userCart) {
        total = total + youtuber.salary;
    }
    return (
        <div className="usercart">
            <h2>{userIcon} User Added: {props.userCart.length}</h2>
            <h2>{salaryIcon} Total Salary: ${total}</h2>
            <ul>
                {
                    users.map(user => <div className="user-item-design" key={user.key}>
                        <div>
                            <img className="image-size" src={user.img} alt="" />
                        </div>
                        <div className="user-name">
                            {user.name}
                        </div>
                    </div>)
                }
            </ul>
            <button>Buy Now</button>
        </div>
    );
};

export default Usercart;