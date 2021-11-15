import React from 'react';

const NotFound = () => {
    return (
        <div className='container d-flex justify-content-around align-items-center text-center my-5'>
            <div>
                <h1>404: File not found.</h1>
                <p>Please try again or restart your browser.</p>
            </div>
            <div>
                 <img src="../../../../Images/404.png" alt="" />
            </div>
        </div>
    );
};

export default NotFound;