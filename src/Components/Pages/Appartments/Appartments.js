import React from 'react';
import useAppartments from '../../Hooks/useAppartments';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Appartment from './Appartment';

const Appartments = () => {
    const {appartments} = useAppartments([]);

    return (
        <>
        <Header/>
        <div className='my-4'>
             <div className="text-center custom-color my-5">
            
                <h2 className="fw-bold">Discover the latest Rent <br/>
                    available today</h2>
            </div>
            <div className='container '>
           <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
                appartments.map(appartment=><Appartment
                key={appartment._id}
                appartment={appartment}
                ></Appartment>)
            }
            </div>

        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Appartments;