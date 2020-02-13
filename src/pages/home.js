import React from 'react';

//components
import Navigation from '../components/navigation';
import Landing from '../components/landing';
import Welcome from '../components/welcome';
import Subscribe from '../components/subscribe';
import Message from '../components/message';
import Footer from '../components/footer';

const Home = () => (
    <div>
        <Navigation/>
        <Landing/>
        <Welcome/>
        <Subscribe/>
        <Message/>
        <Footer/>
    </div>

);
  
export default Home;