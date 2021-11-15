import React from 'react';
import useAppartments from '../../Hooks/useAppartments';
import Appartment from './Appartment';

const HomeAppartments = () => {
    const {appartments} = useAppartments([]);
    const HomeAppartments = appartments.slice(0, 6);
    console.log(HomeAppartments);

    return (
        <div className='my-4'>
             <div className="text-center custom-color my-5">
                <p>House Rent</p>
                <h2 className="fw-bold">Discover the latest Rent <br/>
                    available today</h2>
            </div>
            <div className='container '>
           <div className="row row-cols-1 row-cols-md-3 g-4 ">
           {
                HomeAppartments.map(appartment=><Appartment
                key={appartment._id}
                appartment={appartment}
                ></Appartment>)
            }
            </div>

        </div>
        </div>
    );
};

export default HomeAppartments;