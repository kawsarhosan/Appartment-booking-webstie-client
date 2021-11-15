import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleEmail =e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit =e =>{
        const user ={email};
        fetch ("http://glacial-cove-39910.herokuapp.com/users/admin", {
            method:'PUT',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
                setEmail('')
                setSuccess(true)
            }
        })

        e.preventDefault();

    }

    return (
        <div className='mx-auto w-50'>
            <h2 className='fw-bold custom-color text-center'>Make an Admin:</h2>
            <form className='' onSubmit={handleAdminSubmit}>
                <input onBlur={handleEmail} type="email" className="form-control" placeholder='Enter an email to make admin'/>
                    <input className='custom-btn d-block mx-auto mt-3' type="submit" value="Make Admin"/>

            </form>
            {
                success && alert('Make admin succefully')
            }
        </div>
    );
};

export default MakeAdmin;