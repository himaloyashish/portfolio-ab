import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header className='header'>
                <a href="#" className='Logo'>AB</a>
                <nav className='navbar'>
                    <a href="#" className='active'>About</a>
                    <a href="#">Work</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Get in touch</a>

                </nav>
            </header>
            <section className='homes'>
                <div>
                    <h1>Hi, Im Himaloy</h1>
                    <h3>Im a MERN-Stack developer</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic voluptate optio laudantium perspiciatis quos architecto modi ut repellat fugiat sit. Incidunt, et. Tempore sed tempora excepturi consequatur quo dolorem at.</p>
                    <div>
                        <a href="#">Hire me</a>
                        <a href="#">Lets talk</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;