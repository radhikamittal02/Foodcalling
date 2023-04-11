import React from 'react';
import '../style.css';

const Header = () => {
    return (
        <div className="header-class">
            <div>Logo</div>
            <input type="text" value="Deliver to" />
            <div>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

