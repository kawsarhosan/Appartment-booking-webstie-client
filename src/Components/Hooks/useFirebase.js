import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";

import initializeAuthentication from '../Firebase/Firebase.init';
import { useHistory, useLocation } from 'react-router-dom';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState ('');

    const [admin, setAdmin] = useState(false);

    const location = useLocation();
    const redirectURL = location.state?.from || '/home';
  
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
      return signInWithPopup(auth, GoogleProvider)
        
    };

    const registerWithEmailPass = (name, email, pass) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            // Signed in 
            const userData = result.user;

            console.log(userData)
            setUser(userData)
            // save user
            saveUser(userData.email, name)
            saveUserGoogle(userData.email, name )
          // console.log(userData.email, name)
            updateProfile(auth.currentUser, {
                displayName: name
              })
            
          })
          .catch((error) => {
            
            setError(error.message);
            // ..
          })
          .finally(() =>{
            setIsLoading(false)
          })
    }

    const loginWithEmailPass = (email, pass) =>{
      signInWithEmailAndPassword(auth,email, pass)
      .then(result => {
        history.push(redirectURL);
        const userData = result.user;
        console.log(userData)
        
      })
      .catch((error) => {
       
        setError(error.message);
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        console.log('sign out succesful')
      }).catch((error) => {
        setError(error)
      })
      .finally(()=>setIsLoading(false))



   }

  const saveUser = (email, displayName)=>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
  }
  const saveUserGoogle = (email, displayName)=>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
  }

  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=>res.json())
    .then(data => setAdmin(data.admin))
  })

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
               
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        
    }
    ,[]);

    return {
      loginWithEmailPass,
      registerWithEmailPass,
        signInWithGoogle,
        logOut,
        user,
        admin,
        setUser,
        error, 
        setError,
        isLoading,
        setIsLoading,
        saveUserGoogle
    }
};

export default useFirebase;