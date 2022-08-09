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


export {loadingCities, sucessCities, getCities}