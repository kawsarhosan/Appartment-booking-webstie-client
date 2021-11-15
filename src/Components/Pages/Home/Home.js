import React from 'react';

import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ReviewsPage from '../ReviewsPage/ReviewsPage';
import HomeAppartments from '../Appartments/HomeAppartments';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <HomeAppartments></HomeAppartments>
            <ReviewsPage></ReviewsPage>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;