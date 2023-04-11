import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

/**
 Online Food Order
 Header 
 - Logo
 - Deliver to - Search Box
 - Menu List
 - cart icon
 - Banner Image

 Body
  - Categories
  - Showing  categories with data cards

 Footer
  - company
  - Help & Contact
  - More From Us
  - Subcription
  - Terms 
  - Policy
 */

const Template = () => {
    return (
        <>
            <Header />
            <div>Body</div>
            <Footer />
        </>
    );
} 


ReactDOM.render(<Template />, document.getElementById('root'));