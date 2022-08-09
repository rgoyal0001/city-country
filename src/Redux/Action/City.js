export const GET_CITIES='GET_CITIES'
export const LADING_CITIES='LADING_CITIES'
export const SUCESS_CITIES='SUCESS_CITIES'


const sucessCities=(data)=>({
    type:SUCESS_CITIES,
    data
})

const loadingCities= () =>({
    type:LADING_CITIES
})

const getCities=()=>
    async(dispatch)=>{
        try {
            dispatch(loadingCities());
            let res=await fetch('http://localhost:8080/cities')
            let data=await res.json();
            dispatch(sucessCities(data));
        } catch (error) {
            console.log(error)
        }
    }

const sortByPopu=(order,country)=>async(dispatch)=>{
    try {
        dispatch(loadingCities());
        let res=await fetch('http://localhost:8080/cities');
        let data=res.json();
        if(order=='ascending'){
            data.sort((a,b)=>a.population-b.population);
        }
        if(order=='decending'){
            data.sort((a,b)=>b.population-a.population);
        }
        if(country){
            data=data.filter(item=>item.country===country)
        }
        dispatch(sucessCities(data));
    } catch (error) {
        console.log(error)
    }
}

const filterByCountry=(country)=>async(dispatch)=>{
    try {
        if(!country){
            dispatch(getCities());
            return;
        }
        dispatch(loadingCities());
        let res=await fetch('http://localhost:8080/cities?country='+country);
        let data=res.json();
        dispatch(sucessCities(data));
    } catch (error) {
        console.log(error)
    }
}

export {loadingCities, sucessCities, getCities, sortByPopu, filterByCountry}