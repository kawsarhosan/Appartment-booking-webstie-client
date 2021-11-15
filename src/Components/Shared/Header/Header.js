import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

  const {user, logOut} = useAuth()
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-white sticky-top ">
            <div className="container">
                <Link className="navbar-brand" to='/home'>
                    <img src="Images/logo.png" alt="" width="" height=""/>
                  </Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse  navbar-collapse d-lg-flex justify-content-end text-center" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active fw-bold" aria-current="page" to="/home">Home</Link>
                      </li>
                    
                      <li className="nav-item">
                        <Link className="nav-link fw-bold mx-2" to='/appartments'>Appartments</Link>
                      </li>
                      <div className='ms-3'>
                        <Link className='fw-bold custom-color mx-2' to="#">{user.displayName}</Link>
                        
                        {
                        !user?.displayName && <Link to="/login">
                          <button  className="btn custom-btn">Login</button>
                        </Link>
                        }
                        
                        {
                        user?.displayName && <Link to="/dashboard">
                          <button  className="btn me-2 btn-outline-danger">Dashboard</button>
                        </Link>
                        }
                        {
                        user?.displayName && <Link to="#">
                          <button onClick={logOut} className="btn custom-btn">Logout</button>
                        </Link>
                        }
                      </div>
                     
                    </ul>
                  </div>
                </div>
              </nav>
            
        </div>
    );
};

export default Header;