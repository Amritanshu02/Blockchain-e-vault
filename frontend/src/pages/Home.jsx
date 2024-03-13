import React from 'react';
import "../styles/Home.css";
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='home-main-container'>
            <Navbar />

            <div className="home-content">
                <div className="home-content-left">
                    <h1><span>Revolutionary way</span> to <br />save your legal documents</h1>
                    <p>Secure Legal Records Management with Blockchain Technology - Scalable and Integrated Solution</p>
                    <button>LEARN MORE</button>
                </div>

                <div className="home-content-right">
                    <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" alt="image" />
                </div>
            </div>



        </div>
    )
}

export default Home;