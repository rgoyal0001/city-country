import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities, filterByCountry, sortByPopu } from "../Redux/Action/City";
import { getCountries } from "../Redux/Action/Country";
import EditCity from "./EditCity";
import { Link } from "react-router-dom";

const Home=()=>{ 

    const dispatch=useDispatch();
    const {cities}=useSelector(store=>store.cities)
    const {countries}=useSelector(store=>store.countries);
    const [countryName,setCountryName]=useState("")
 
    useEffect(()=>{
        dispatch(getCities());
        dispatch(getCountries());
    },[dispatch])

    const handleDelete=async(id)=>{
        try {
            await fetch(`http://localhost:8080/cities/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            dispatch(getCities())
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div>
            <div>
                <select name="sort" onChange={(e)=>{
                    dispatch(sortByPopu(e.target.value,countryName));
                }}>
                    <option value="">Sort by population</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>

                <select value={countryName} onChange={(e)=>{
                    setCountryName(e.target.value)
                    dispatch(filterByCountry(e.target.value));
                }}>
                    <option value="">Choose Country</option>
                    {countries?.map((item)=>(
                        <option key={item.id} value={item.country}>
                            {item.country}
                        </option>
                    ))}

                </select>
                
            </div>




            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map((city,i)=>(
                        <tr key={city.id}>
                            <td>{i+1}</td>
                            <td>{city.country}</td>
                            <td>{city.city}</td>
                            <td>{city.population}</td>
                            <td><Link to={`/edit-city/${city.id}`}style={{textDecoration:"none",color:"black"}}>Edit</Link></td>
                            <td><button onClick={()=>handleDelete(city.id)} style={{cursor:"pointer"}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Home;