import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const PlaceOrder = () => {
    
    const {user} = useAuth();
    const {id} = useParams();
    
    const [placeOrder, setPlaceOrder] = useState({});
    

    const addressRef = useRef();
    const mobileRef = useRef();

    
    const title = placeOrder.title;
    const status ="Pending";

    const handleBooking = e =>{
       
       
        const address = addressRef.current.value;
        const mobile = mobileRef.current.value;

        const newBooking = {name:user.displayName, email:user.email , address: address, mobile: mobile, title: title, status: status }

        fetch("http://glacial-cove-39910.herokuapp.com/bookings", {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert('New booking added successfully!!!');
                e.target.reset();
            }
        })

        e.preventDefault();
    }

    useEffect( ()=>{
        fetch(`http://glacial-cove-39910.herokuapp.com/appartments/${id}`)
        .then(res=> res.json())
        .then(data => setPlaceOrder(data))
    },[])
    return (
        <>
        <Header/>
        <div className='my-3 p-3'>
            <h2 className='custom-color fw-bold text-center mb-5'>Place your order:</h2>
            <Container>
                <Row>
                    <Col className=''>
                        <div className='d-block mx-auto'>
                        <Card style={{ width: '500px' }}>
                            <Card.Img variant="top" src={placeOrder.img} />
                            <Card.Body className=" text-center">
                                <Card.Title><h2 className='custom-color fw-bold'>{placeOrder.title}</h2></Card.Title>
                                <Card.Text className='fw-bold fs-6'>
                                <i className="fas fa-map-marker-alt"></i> {placeOrder.location}<br/>
                                Price: ${placeOrder.price}
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    
                    </Col>
                    <Col className="shadow rounded">
                    <div className='p-5 d-block mx-auto'>
                        
                        <h3 className='fw-bold custom-color text-center'>Your Information</h3>
                        <form onSubmit={handleBooking}>
                        <p className="fw-bold text-center">Ordered by: {user.displayName}</p>
                        <p className="fw-bold text-center">Email: {user.email}</p>
                        <br/>
                        <textarea ref={addressRef} className='form-control' placeholder='Address' id="" cols="30" rows="2"></textarea><br/>
                        <input ref={mobileRef} className='form-control' type="tel" placeholder='Mobile' /><br/>

                        <input className='btn custom-btn d-block mx-auto' type="submit" value="Place Order" />
                        
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
        </>
    );
};

export default PlaceOrder;