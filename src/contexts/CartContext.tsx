import { ReactNode, createContext, useState } from "react";
import { CoffeeInterface } from '../components/CoffeCard/index.tsx'

interface CartContext{
    coffeeCart: CoffeeInterface[]
}  

interface CartContextProviderProps{
    children: ReactNode
}

export const CartContext = createContext({} as CartContext)

export function CartContextProvider({children}: CartContextProviderProps){
    const [ coffeeCart, setCoffeeCart ] = useState<CoffeeInterface[]>([])

    function addCoffeeToCart(){
        const newCoffeeCartList = [...coffeeCart, '']
    }

    return(
        <CartContext.Provider value={{coffeeCart}}>
            {children}
        </CartContext.Provider>
    )
}