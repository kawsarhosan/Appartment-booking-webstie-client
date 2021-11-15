import { useContext } from 'react'
import { authContext } from '../Context/AuthProvider';

const useAuth = (props) => {
   
    return (
        useContext(authContext)
    );
};

export default useAuth;