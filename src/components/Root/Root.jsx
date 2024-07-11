import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div>
           <div className='mx-6 md:max-w-5xl md:mx-auto'>
            <Header></Header> 
            <Outlet>  
            </Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;