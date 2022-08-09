import {legacy_createStore as createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { cityReducer } from '../Reducer/City';
import { countryReducer } from '../Reducer/Country';

const rootReducer=combineReducers({
    cities:cityReducer,
    countries:countryReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))