import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className=''>
            <div className='container my-5 d-lg-flex justify-content-around align-items-center'>
                <div className='pe-5' > 
                    <h1 className="fw-bold custom-color">A trusted provider</h1>
                    <h5>of booking appartment.</h5>
                    <p className="text-muted">“We deliver your service safely to you in a reasonable time"</p>
                    <Link to='/appartments'><button className='btn custom-btn'>Book Appartment</button></Link>
                </div>
                <div>
                    <img className="w-100" src="../../../../Images/hero.png" alt="" />
                </div>
            </div>
        <div className="text-center custom-bg bg-image">
        {/* <img className='bg-image' src="/Images/header.png" alt=""/> */}
        <div className="py-5 h-100">
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-white ">
                    <h1 className=" mb-4">FIND YOUR APPARTMENT</h1>
                    <div className="d-flex  ">
                        <input className="form-control w-100 mx-2" type="search" placeholder="Find your appartment" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
       {/* Background image */}

        </div>
    );
};

export default Hero;