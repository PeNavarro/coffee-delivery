import { CoffeeInCart } from "../contexts/CartContext";

export enum CoffeeCartActionTypes {
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
    UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
    REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function CoffeeCartReducer(state: CoffeeInCart[], action: any) {
    switch (action.type) {
        case CoffeeCartActionTypes.ADD_COFFEE_TO_CART:
            const existingCoffee = state.find(coffee => coffee.coffee.id === action.payload.coffee.id);

            if (existingCoffee) {
                const newCoffeeQuantity = existingCoffee.coffeeQuantity + action.payload.coffeeQuantity;
                return state.map(coffee =>
                    coffee.coffee.id === action.payload.coffee.id
                        ? { ...coffee, coffeeQuantity: newCoffeeQuantity }
                        : coffee
                );
            } else {
                return [...state, action.payload];
            }

        case CoffeeCartActionTypes.UPDATE_COFFEE_QUANTITY:
            return state.map((coffee: CoffeeInCart) => {
                if(coffee.coffee.id === action.payload.coffeeId){
                    return {...coffee, coffeeQuantity: action.payload.newCoffeeQuantity}
                }

                return {...coffee}
            })
        
        case CoffeeCartActionTypes.REMOVE_COFFEE_FROM_CART:
            return state.filter((coffee) => coffee.coffee.id !== action.payload.coffeeId)
            
        default:
            return state;
    }
}