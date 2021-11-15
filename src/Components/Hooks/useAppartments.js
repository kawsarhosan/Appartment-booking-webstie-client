import React, { useEffect, useState } from 'react';

const useAppartments = () => {
    const [appartments, setAppartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        const url = 'http://glacial-cove-39910.herokuapp.com/appartments';
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            setAppartments(data)
            setIsLoading(false)
        })

    },[])
    return{
        appartments,
        setIsLoading,
        isLoading
    };
};

export default useAppartments;