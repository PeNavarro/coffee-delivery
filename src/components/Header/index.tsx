import { HeaderContainer } from "./styles"
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

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
            <Link to="/">
                <img src={logo} alt="Logo Coffe Delivery" />
            </Link>

            <nav>
                <div className="location">
                    <MapPin width={22} weight="fill" color='#8047F8' />
                    <span>Porto Alegre, RS</span>
                </div>

                <Link to="/checkout" className="cartLink">
                    <button className="cart">
                        <span>{countTotalCoffeesOnCart()}</span>
                        <ShoppingCart width={22} weight="fill" color="#C47F17"/>
                    </button>
                </Link>
            </nav>
        </HeaderContainer>
    )}