import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Services from '../../Components/Services/Services';
import JoinSection from '../../Components/JoinSection/JoinSection';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Services/>
            <JoinSection/>
        </div>
    );
};

export default Home;