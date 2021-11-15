import React from 'react';
import { Link } from 'react-router-dom';

const Appartment = (props) => {
    const {_id,img, title, price, location} =props.appartment;
    return (
        <div>
            
            <div className="col">

                <div className='card-group h-100 shadow-sm'>
                <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className='d-flex justify-content-between fs-6 text-muted'>
                        <h3 className='custom-color fw-bold'>{title}</h3>
                    </div>
                    <h6 className="card-title text-muted"><i className="fas fa-map-marker-alt"></i> {location}</h6><br/>
                <div className=' d-flex justify-content-between align-items-center'>
                        <h4 className='fw-bold'>Price: ${price}</h4>
                        <Link to={`/placeorder/${_id}`} children={props.appartment}><button  className="btn custom-btn">Book Now</button></Link>
                </div>
                </div>
                </div>
                </div>
                </div>
                
                </div>
                    
                    );
                };

export default Appartment;