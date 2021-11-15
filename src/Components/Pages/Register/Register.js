
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';



const Register = () => {
  const {signInWithGoogle, registerWithEmailPass} = useAuth();
  const nameRef= useRef();
  const emailRef= useRef();
  const passRef= useRef();

  const hanldeRegistration = e =>{
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass= passRef.current.value;
    
    registerWithEmailPass(name, email, pass);
    e.target.reset();
   
    
  }

  
    return (
      <>
      <Header/>
        <div className='container'>
            <div className="col-lg-6 my-5 mx-auto border shadow-sm p-5 rounded">
              <form onSubmit={hanldeRegistration}>
                <div className="text-center mb-3">
                  <h3 className="fw-bold">Create in a account with:</h3>
                  
                  <button onClick={signInWithGoogle}  type="button" className="btn custom-btn btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                    
                </div>
          
                <p className="text-center">or:</p>
          
                {/* <!-- Name input --> */}
                <div className="form-outline mb-4">
                  <input ref={nameRef}   type="text" id="registerName" className="form-control" />
                  <label className="form-label" htmlFor="registerName">Name</label>
                </div>
                    
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input ref={emailRef} type="email" id="registerEmail" className="form-control" />
                  <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>
          
                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input ref={passRef} type="password" id="registerPassword" className="form-control"/>
                  <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>
                <p className="text-danger text-center"></p>
                               
                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
          
                {/* <!-- Submit button --> */}
                <button   type="submit" className="btn custom-btn d-block mx-auto text-white w-25 my-3">Register</button>
                <p className="text-center">Already have an account? <Link to="/login">Login</Link></p> 
              </form>
            </div>
        </div>
       <Footer/>
      </>
    );
};

export default Register;