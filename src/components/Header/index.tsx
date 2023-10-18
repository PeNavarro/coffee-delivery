import { HeaderContainer } from "./styles"
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export function Header(){
    const { coffeeCart } = useContext(CartContext)

    function countTotalCoffeesOnCart(){
        let totalCoffeeQuantity = 0;

        coffeeCart.map(coffee => {
            totalCoffeeQuantity += coffee.coffeeQuantity
        })

        return totalCoffeeQuantity
    }

    return(
        <HeaderContainer>
            <img src={logo} alt="Logo Coffe Delivery" />

            <nav>
                <div className="location">
                    <MapPin width={22} weight="fill" color='#8047F8' />
                    <span>Porto Alegre, RS</span>
                </div>

                <button className="cart">
                    <span>{countTotalCoffeesOnCart()}</span>
                    <ShoppingCart width={22} weight="fill" color="#C47F17"/>
                </button>
            </nav>
        </HeaderContainer>
    )}