import React from 'react';
import Header from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
const Base = props => {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    );
};

export default Base;
