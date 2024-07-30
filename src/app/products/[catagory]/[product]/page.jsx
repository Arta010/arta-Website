'use client'
import ProductPage from '@/app/productpages/product'
import axios from 'axios';
import {useEffect,useState} from 'react'
const fetching = () =>{
    const data = axios.get("https://server1-six-navy.vercel.app/product").then((response) =>response.data);
    return data;
}

export default function Home(props) {
    let [d,setdata] = useState([]);
    useEffect(() => {
        fetching().then(data => setdata(data));
    }, [])
    if(d.length)
    return (
        <ProductPage data={d} params={props.params}/>
    )
    else{
        return <img src="/assets/03-42-11-849_512.webp" width={'200px'} height={'200px'} style={{
            position: 'absolute',
            left:'calc(50% - 100px)',
            top:'calc(50% - 100px)'
        }} alt="" />
    }
}