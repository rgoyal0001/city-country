import {  LADING_CITIES, SUCESS_CITIES } from "../Action/City";

const cityReducer=(store={cities:[],loading:false},action)=>{
    switch(action.type){
        case LADING_CITIES:{
            return {...store,loading:true};
        }
        case SUCESS_CITIES:{
            return {...store,loading:false,cities:action.data};
        }
        default:
            return store;
    }
}

export {cityReducer}