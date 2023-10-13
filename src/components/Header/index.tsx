import { HeaderContainer } from "./style"
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="Logo Coffe Delivery" />

            <nav>
                <div className="location">
                    <MapPin width={22} weight="fill" color='#8047F8' />
                    <span>Porto Alegre, RS</span>
                </div>

                <button className="cart">
                    <ShoppingCart width={22} weight="fill" color="#C47F17"/>
                </button>
            </nav>
        </HeaderContainer>
    )}