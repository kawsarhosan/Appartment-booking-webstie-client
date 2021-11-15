import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';


const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        const url = 'http://localhost:5000/reviews';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setReviews(data)
            
            setIsLoading(false)
        })

    },[])

    return (
        <div className='my-5'>
        <div className="text-center custom-bg p-4 my-4">
            <p className="text-white">Customer Reviews</p>
            <h3 className="fw-bold text-dark">One of our customer review <br/>
                Its Our Inspiration</h3>

                <div className=' custom-bg'>
                    <div className='container'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        reviews.map(review=> <div 
                            key={review._id}
                            className="col p-3 ">
                            <div className="card h-100 border-1 rounded text-white text-center">
                                <div className="card-body custom-color ">
                                <h5 className="card-title fw-bold text-center">{review.displayName}</h5>

                                <small className='text-muted'><span className="fs-2">"</span>{review.reviews}</small><br/><br/>
                                
                                <Rating name="read-only" value={review.rating} readOnly />
                                
                              </div>
                            </div>
                          </div>
                        )
                    }
                 
                    </div>
                </div>
                    </div>
        </div>
        </div>
    );
};

export default ReviewsPage;