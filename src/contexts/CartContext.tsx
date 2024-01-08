import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CoffeeInterface } from '../components/CoffeCard/index.tsx'
import { FormData } from '../pages/Checkout/index.tsx'
import { OrderDataReducer, OrderDataActionTypes } from "../reducers/orderDataReducer.ts";
import { CoffeeCartReducer, CoffeeCartActionTypes } from "../reducers/coffeeCartReducer.ts";

export interface CoffeeInCart{
    coffee: CoffeeInterface,
    coffeeQuantity: number
}

interface CartContext{
    coffeeCart: CoffeeInCart[],
    orderData?: FormData,
    addCoffeeToCart: (coffee: CoffeeInCart) => void,
    updateCoffeeCartQuantity: (coffeeId: string, coffeeQuantity: number) => void,
    removeCoffeeFromCart: (coffeeId: string) => void,
    addOrderData: (orderData: FormData) => void
    setCityAndState: (city: string, state: string) => void
}  

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({children}: CartContextProviderProps){
    const [orderData, dispatchOrderData] = useReducer(OrderDataReducer, () => {
        if(localStorage.getItem('@coffee-delivery:order-data-1.0.0')){
            return JSON.parse(localStorage.getItem('@coffee-delivery:order-data-1.0.0')!)
        }
        return
    });

    const [ coffeeCart, dispatchCoffeeCart ] = useReducer(CoffeeCartReducer, [], () => {
        if(localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')){
            return JSON.parse(localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')!) as CoffeeInCart[];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', JSON.stringify(coffeeCart))

        if(orderData)
            localStorage.setItem('@coffee-delivery:order-data-1.0.0', JSON.stringify(orderData))
    }, [coffeeCart, orderData])

    function addCoffeeToCart(coffeeToCart: CoffeeInCart){
        if(coffeeToCart.coffeeQuantity > 0){
            dispatchCoffeeCart({
                type: CoffeeCartActionTypes.ADD_COFFEE_TO_CART,
                payload: coffeeToCart
            })       
        }
        
    }

    function updateCoffeeCartQuantity(coffeeId: string, newCoffeeQuantity: number){
        if(newCoffeeQuantity > 0){
            dispatchCoffeeCart({
                type: CoffeeCartActionTypes.UPDATE_COFFEE_QUANTITY,
                payload: {coffeeId: coffeeId, newCoffeeQuantity: newCoffeeQuantity}
            })   
        }
    }

    function removeCoffeeFromCart(coffeeId: string){
        dispatchCoffeeCart({
            type: CoffeeCartActionTypes.REMOVE_COFFEE_FROM_CART,
            payload: {coffeeId: coffeeId}
        }) 
    }

    function addOrderData(orderData: FormData){
        dispatchOrderData({
            type: OrderDataActionTypes.ADD_ORDER_DATA,
            payload: orderData
        })
    }

    function setCityAndState(city: string, state: string){
        if(city && state){
            dispatchOrderData({
                type: OrderDataActionTypes.SET_CITY_AND_STATE,
                payload: {city: city, state: state}
            })
        }else{
            dispatchOrderData({
                type: OrderDataActionTypes.SET_CITY_AND_STATE,
                payload: {city: '', state: ''}
            })
        }
    }

    return(
        <CartContext.Provider value={{coffeeCart, orderData, addCoffeeToCart, updateCoffeeCartQuantity, removeCoffeeFromCart, addOrderData, setCityAndState}}>
            {children}
        </CartContext.Provider>
    )
}