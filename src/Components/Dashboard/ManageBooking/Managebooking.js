import React, { useEffect, useState } from 'react';

const Managebooking = () => {
    
    const [bookings, setBookings] = useState([]);
  
    useEffect(()=>{
        const url = 'http://localhost:5000/bookings';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setBookings(data)
            
        
        })

    },[])

    const handleDelete = id =>{
        const procesed = window.confirm('Are you sure want to delete?')
        if(procesed){
            const url = `http://localhost:5000/bookings/${id}`;
    fetch(url,{
        method :'DELETE'
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.deletedCount >0){
            alert('Remove Succefully')
            const remainBooking = bookings.filter(booking=>booking._id!== id);
            setBookings(remainBooking);
        }
    })
        }
    
    }
    const handleStatus = id =>{
        console.log('approve button click')
        const statusChanged = {status:'Approved'}
        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(statusChanged)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                alert('Approve Succefully')
                
            }
        })

    }
    
    return (
        
        <div className='container my-4 text-center'>
        
                <table className="table align-middle">
                <thead>
                        <tr>
                        
                        <th scope="col">Product Name</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Status</th>
                        <th scope="col">Cancle</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.map(booking=>
                            <tr key={booking._id}>
                            
                            <td>{booking.title} </td>
                            <td>{booking.name}</td>
                            <td>{booking.mobile}</td>
                            <td>{booking.email}</td>
                            
                            <td><button type="button" className="btn btn-warning btn-sm px-3">{booking.status}</button>
                            {
                                booking.status === 'Pending' && <button type="button" onClick={()=>handleStatus(booking._id)} className="btn btn-primary btn-sm px-3 ms-1">Approved</button> 
                                }</td>
                            <td><button onClick={() =>handleDelete(booking._id)} type="button" className="btn btn-danger btn-sm px-3">
                            <i className="fas fa-times"></i>
                            </button></td>
                            </tr>
                            
                        )
                    }
                    </tbody>
                    </table>
                  
        </div>
    );
};

export default Managebooking;
        