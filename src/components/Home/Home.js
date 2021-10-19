import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Services from '../Services/Services';
// import './Home.css';

// https://i.ibb.co/L0khcfz/woman-6018388-1.jpg
// https://i.ibb.co/CKb7MPh/pexels-rodnae-productions-6129049-1.jpg
// https://i.ibb.co/NSXmyt9/dentist-6225092-1.jpg


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <About></About>
           <Contacts></Contacts>
        </div>
    );
};

export default Home;