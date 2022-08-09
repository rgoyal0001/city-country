import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCities } from "../Redux/Action/City";
import { getCountries } from "../Redux/Action/Country";



const City=()=>{
    const {cities}=useSelector(store=>store.cities);
    const {countries}=useSelector(store=>store.countries);
    const [cityName, setCityName]=useState('')
    const [countryName, setCountryName]=useState('')
    const [popu, setPopu]=useState('')
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCities());
        dispatch(getCountries());
    },[dispatch])


    const handleAddCity=async(e)=>{
        e.preventDefault();
        try {
            let check=cities.find((item)=>item.city==cityName && item.country==countryName);
            if(check){
                alert('city already exists')
            }
            else if(cityName =='')
                alert('fill city name')
            else if(countryName =='')
                alert('fill country name')
            else if(popu =='')
                alert('fill population')
            else {
                await fetch('http://localhost:8080/cities',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        city:cityName,
                        country:countryName,
                        population:popu
                    })
                });
                dispatch(getCities());
                alert('city has been added');
                setCityName('');
                setCountryName('');
                setPopu('');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>  
            <form onSubmit={e=>handleAddCity(e)}>
                <select name="" id="country" value={countryName} onChange={e=>{setCountryName(e.target.value)}}>
                    <option value="">Choose Country</option>
                    {countries.map(ele=>(
                        <option key={ele.id} value={ele.country}>{ele.country}</option>
                    ))}
                </select>
                <input type="text" placeholder="Enter City" value={cityName} onChange={e=>{setCityName(e.target.value)}}/>
                <input type="number" placeholder="Enter population" value={popu} onChange={e=>{setPopu(e.target.value)}}/>
                <input type="submit" value="add"/>
            </form>
        </div>
    )
}
export default City;