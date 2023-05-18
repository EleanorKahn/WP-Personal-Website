import React from 'react';
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <nav>
                <h1>
                    <NavLink to="/">Character</NavLink>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About Me</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderComponent;