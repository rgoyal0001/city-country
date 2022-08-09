import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCities } from "../Redux/Action/City";
import { getCountries } from "../Redux/Action/Country";



const Country=()=>{
    const {countries}=useSelector(store=>store.countries);
    const [countryName, setCountryName]=useState('')
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])


    const handleAddCountry=async(e)=>{
        e.preventDefault();
        try {
            let check=countries.find((item)=>item.country==countryName);
            if(check){
                alert('country already exists')
            }
            else if(countryName =='')
                alert('fill country name')
            else {
                await fetch('http://localhost:8080/countries',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        country:countryName,
                    })
                });
                dispatch(getCountries());
                alert('country has been added');
                setCountryName('');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>  
            <form onSubmit={e=>handleAddCountry(e)}>                    
                <input type="text" placeholder="Enter Country Name" value={countryName} onChange={e=>{setCountryName(e.target.value)}}/>
                <input type="submit" value="add"/>
            </form>
        </div>
    )
}
export default Country;