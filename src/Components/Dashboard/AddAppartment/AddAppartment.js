import React, { useRef } from 'react';

const AddAppartment = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const locationRef = useRef();
    
    
    const handleAppartment = e =>{
        const img = imgRef.current.value;
        const title = titleRef.current.value;
        const price = priceRef.current.value;
       const location =locationRef.current.value;


       const newAppartment = {img: img, title:title, price: price,  location: location}
        fetch("http://glacial-cove-39910.herokuapp.com/appartments", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newAppartment)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New appartment added successfully!!!');
                e.target.reset();
            }
        })



        e.preventDefault();
    
    }
    return (
        <div className='my-5 py-5 text-center'>
            <h1 className='custom-color'>Add Appartment</h1>
            <div className='w-50 d-block mx-auto'>
            <form onSubmit={handleAppartment}>
            <input ref={imgRef} className='form-control' type="text" placeholder='Img URL' /><br/>
            <input ref={titleRef} className='form-control' type="text" placeholder='Title' /><br/>
            <input ref={locationRef} className='form-control' type="text" placeholder='Location' /><br/>
            <input ref={priceRef} className='form-control' type="tel" placeholder='Price' /><br/>

            <input className='btn custom-btn' type="submit" value="Add Service" />
            
            </form>
            </div>
        </div>
    );
};

export default AddAppartment;