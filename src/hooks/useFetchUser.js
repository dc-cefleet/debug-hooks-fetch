import {useState, useEffect} from "react";

const useFetchUser = ()=>{

    const [user,setUser] = useState(null);


    useEffect(()=>{

        const { loading,error, data, fetchData } = useFetch('https://randomuser.me/api/');

        if(!data && !loading){
            fetchData();
        }

    },[]);

    useEffect(()=>{
        if(data && data.results && !loading){
            setUser(data.results[0]);
        }
    },[data, loading])

    const getNewUser = () => {
        fetchData()
    }

    return {loading, user, getNewUser};
};

export default useFetchUser;