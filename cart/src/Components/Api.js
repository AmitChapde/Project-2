import React,{useState,useEffect} from "react";
import axios from 'axios';


const Api = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(()=>{
    const fetchData= async()=>{
        try {
           const response =await axios.get('https://fakestoreapi.com/products') 
           setData(response.data);
           setLoading(false);

        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    fetchData();
},[])

}

export default Api; 