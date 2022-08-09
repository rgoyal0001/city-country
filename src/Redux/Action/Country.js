export const GET_COUNTRIES='GET_COUNTRIES'
export const LADING_COUNTRIES='LADING_COUNTRIES'
export const SUCESS_COUNTRIES='SUCESS_COUNTRIES'


const sucessCountries=(data)=>({
    type:SUCESS_COUNTRIES,
    data
})

const loadingCountries= () =>({
    type:LADING_COUNTRIES
})

const getCountries=()=>
    async(dispatch)=>{
        try {
            dispatch(loadingCountries());
            let res=await fetch('http://localhost:8080/countries')
            let data=await res.json();
            dispatch(sucessCountries(data));
        } catch (error) {
            console.log(error)
        }
    }


export {loadingCountries, sucessCountries, getCountries}