import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeInterface } from '../components/CoffeCard/index.tsx'
import { FormData } from '../pages/Checkout/index.tsx'

interface CoffeeInCart{
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
}  

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({children}: CartContextProviderProps){
    const [orderData, setOrderData] = useState<FormData>(() => {

        if(localStorage.getItem('@coffee-delivery:order-data-1.0.0')){
            return JSON.parse(localStorage.getItem('@coffee-delivery:order-data-1.0.0')!)
        }
        return
    })

    const [ coffeeCart, setCoffeeCart ] = useState<CoffeeInCart[]>(() => {

        if(localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')){
            return JSON.parse(localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')!)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', JSON.stringify(coffeeCart))

        if(orderData)
            localStorage.setItem('@coffee-delivery:order-data-1.0.0', JSON.stringify(orderData))
    }, [coffeeCart, orderData])

    function addCoffeeToCart(coffeeToCart: CoffeeInCart){
        if(coffeeToCart.coffeeQuantity > 0){
            setCoffeeCart(coffeeCart => [...coffeeCart, coffeeToCart])         
        }
    }

    function updateCoffeeCartQuantity(coffeeId: string, newCoffeeQuantity: number){
        if(newCoffeeQuantity > 0){
            const cartWithQuantityChanged = coffeeCart.map(coffee => {
                if(coffeeId === coffee.coffee.id){
                    return {...coffee, coffeeQuantity: newCoffeeQuantity}
                }

                return coffee
            })

            setCoffeeCart(cartWithQuantityChanged)
        }
    }

    function removeCoffeeFromCart(coffeeId: string){
        const cartWithCoffeeRemoved = coffeeCart.filter((coffee) => coffee.coffee.id !== coffeeId)

        setCoffeeCart(cartWithCoffeeRemoved)
    }

    function addOrderData(orderData: FormData){
        setOrderData(orderData)
    }

    return(
        <CartContext.Provider value={{coffeeCart, orderData, addCoffeeToCart, updateCoffeeCartQuantity, removeCoffeeFromCart, addOrderData}}>
            {children}
        </CartContext.Provider>
    )
}