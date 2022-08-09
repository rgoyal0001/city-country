import {  LADING_COUNTRIES, SUCESS_COUNTRIES } from "../Action/Country";

const countryReducer=(store={countries:[],loading:false},action)=>{
    switch(action.type){
        case LADING_COUNTRIES:{
            return {...store,loading:true};
        }
        case SUCESS_COUNTRIES:{
            return {...store,loading:false,countries:action.data};
        }
        default:
            return store;
    }
}

export {countryReducer}