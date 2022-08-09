import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import { getCities } from "../Redux/Action/City";
import { getCountries } from "../Redux/Action/Country";



const EditCity=()=>{
    const {cityId}=useParams();
    // const {cities}=useSelector(store=>store.cities);
    const {countries}=useSelector(store=>store.countries);
    const [cityName, setCityName]=useState('')
    const [countryName, setCountryName]=useState('')
    const [popu, setPopu]=useState('')
    const dispatch=useDispatch();

    const handleUpdate=async(e)=>{
        e.preventDefault();
        try {
            if(cityName =='')
                alert('fill city name')
            else if(countryName =='')
                alert('fill country name')
            else if(popu =='')
                alert('fill population')
            else {
                await fetch(`http://localhost:8080/cities/${cityId}`,{
                    method:'PUT',
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
                alert('city has been updated');
               
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>  
            <form onSubmit={e=>handleUpdate(e)}>
                <select name="" id="country" value={countryName} onChange={e=>{setCountryName(e.target.value)}}>
                    <option value="">Choose Country</option>
                    {countries.map(ele=>(
                        <option key={ele.id} value={ele.country}>{ele.country}</option>
                    ))}
                </select>
                <input type="text" placeholder="Enter City" value={cityName} onChange={e=>{setCityName(e.target.value)}}/>
                <input type="number" placeholder="Enter population" value={popu} onChange={e=>{setPopu(e.target.value)}}/>
                <input type="submit" value="edit"/>
            </form>
        </div>
    )
}
export default EditCity;