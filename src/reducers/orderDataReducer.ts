import { FormData } from '../pages/Checkout/index.tsx'

export enum OrderDataActionTypes {
    ADD_ORDER_DATA = 'ADD_ORDER_DATA',
    SET_CITY_AND_STATE = 'SET_CITY_AND_STATE'
}

export function OrderDataReducer(state: FormData, action: any) {
    switch (action.type) {
        case OrderDataActionTypes.ADD_ORDER_DATA:
            return action.payload;

        case OrderDataActionTypes.SET_CITY_AND_STATE:
            return {...state, city: action.payload.city, state: action.payload.state};

        default:
            return state;
    }
}