import React, {useState} from "react"
import Button from './Button';
import Navbar from './Navbar';
import Footer from './Footer'
import {ThemeContextProvider} from './themeContext'

function App(props) {

    
    return (
        <>
            <ThemeContextProvider>
                <Navbar />
                <Button />
                <Footer />
            </ThemeContextProvider>
        </>
    );
}

export default App;