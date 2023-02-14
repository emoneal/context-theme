import React, {useContext} from 'react';
import {ThemeContext} from "./themeContext"

function Footer(props) {
    
    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <h3>This is a footer.</h3>
        </div>
    );
}

export default Footer;