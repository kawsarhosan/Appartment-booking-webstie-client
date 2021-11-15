
import React, { useRef } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';




const Login = () => {
  const {signInWithGoogle, setUser,setError, setIsLoading,loginWithEmailPass,saveUserGoogle} = useAuth();
  const location = useLocation();
  const redirectURL = location.state?.from || '/home';

  const history = useHistory();
  const emailRef = useRef();
  const passRef = useRef();

  const handleGoogle = () =>{
    signInWithGoogle()
    .then((result)=>{
      history.push(redirectURL);
      setUser(result.user)
      saveUserGoogle(result.user.email, result.user.displayName);
      console.log('sign in with google succesfully', result.user);
  })
  .catch(error=>{
      setError(error.message)
  })
  .finally(()=>setIsLoading(false))

  }
  const handleLogin = e =>{
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    loginWithEmailPass(email, pass)
    
    
    
   
    e.target.reset();
  }
    return (
      <>
      <Header/>
        <div className='container'>
           
                <div className="col-lg-6 my-5 mx-auto border shadow-sm p-5 rounded">
                    <form onSubmit={handleLogin}>

                        <h3 className="fw-bold text-center">Login</h3>
                        {/* <!-- Email input --> */}
                        <div className="form-outline mt-3 mb-4">
                          <input ref={emailRef}  type="email" id="form2Example1" className="form-control" required />
                          <label className="form-label" htmlFor="form2Example1">Email address</label>
                        </div>
                      
                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                          <input ref={passRef} type="password" id="form2Example2" className="form-control" required />
                          <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>
                      
                        {/* <!-- 2 column grid layout for inline styling --> */}
                        <div className="row my-3">
                          <div className="col d-flex justify-content-around">
                            {/* <!-- Checkbox --> */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="form2Example3"
                                
                              />
                              <label className="form-check-label" htmlFor="form2Example3"> Remember me </label>
                            </div>
                          </div>
                      
                          <div className="col">
                            {/* <!-- Simple link --> */}
                            <NavLink to="/forget" >Forgot password?</NavLink>
                          </div>
                        </div>
                      
                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn custom-btn d-block mx-auto mb-3 text-white w-25">Login</button>
                      
                        {/* <!-- Register buttons --> */}
                        <div className="text-center">
                          <p>Don’t have an account? <Link to="/register">Create an account</Link></p>
                          <p>or sign up with:</p>
                                                
                          <button onClick={handleGoogle}  type="button" className="btn custom-btn btn-floating mx-1">
                            Sign in with Google
                          </button>
                         </div>
                      </form>
                </div>
        
        </div>
        <Footer/>
        </>
    );
};

export default Login;