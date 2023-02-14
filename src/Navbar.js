import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"

function Navbar(props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Links</a></li>
            
            </ul>
        </div>
    );
}

export default Navbar;