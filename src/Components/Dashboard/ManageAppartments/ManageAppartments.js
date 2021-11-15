import React, { useEffect, useState } from 'react';


const ManageAppartments = () => {

    const [appartments, setAppartments] = useState([]);
   
    
    

    useEffect(()=>{
        const url = 'http://glacial-cove-39910.herokuapp.com/appartments';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
           console.log(data)
           
            setAppartments(data);

        })

    },[])

    const handleDelete = id =>{
        const procesed = window.confirm('Are you sure want to delete?')
        if(procesed){
            const url = `http://glacial-cove-39910.herokuapp.com/appartments/${id}`;
    fetch(url,{
        method :'DELETE'
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.deletedCount >0){
            alert('Remove Succefully')
            const remainAppartment = appartments.filter(appartment=>appartment._id!== id);
            setAppartments(remainAppartment);
        }
    })
        }
    }
    
    return (
        
        <div className='container my-4 text-center'>
        
                <table className="table align-middle">
                <thead>
                        <tr>
                       
                        
                        <th scope="col">Appartment Name</th>
                        <th scope="col">Location</th>
                       
                        <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        appartments.map(appartment=>
                            <tr key={appartment._id}>
                            
                            
                            <td>{appartment.title} </td>
                            <td>{appartment.location}</td>
                           <td><button onClick={() =>handleDelete(appartment._id)} type="button" className="btn btn-danger btn-sm px-3">
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

export default ManageAppartments;
