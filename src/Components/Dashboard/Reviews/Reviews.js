import React, { useRef } from 'react';
import useAuth from '../../Hooks/useAuth';

const Reviews = () => {
    const {user} = useAuth();
    const reviewsRef = useRef();
    const ratingRef = useRef();
 
    const handleReviews = e =>{
        const reviews = reviewsRef.current.value;
        const rating = ratingRef.current.value;
        const displayName = user.displayName;
        console.log(displayName)
        
       const newReview = {reviews: reviews, displayName: displayName, rating: rating}
        fetch("http://localhost:5000/reviews", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('Review added successfully!!!');
                e.target.reset();
            }
        })



        e.preventDefault();
    
    }
    return (
        <div className='my-5 py-5 text-center'>
            <h1 className='custom-color'>Add a Review</h1>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <div className='w-50 d-block mx-auto'>
            <form onSubmit={handleReviews}>
            
            <textarea ref={reviewsRef} className='form-control' placeholder='Write something about our service' id="" cols="30" rows="2"></textarea><br/>
            <input ref={ratingRef} className='form-control' placeholder='Maximum 5' min="1" max="5" type="number"/><br/>
            <input className='btn custom-btn' type="submit" value="Add Review" />
            
            </form>
            </div>
        </div>
    );
};

export default Reviews;