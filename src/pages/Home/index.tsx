import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Background, CoffeList, Hero, HomeContainer } from './styles.ts'
import heroImage from '../../assets/hero-image.png'
import backgroundHero from '../../assets/background-hero.jpg'
import { coffeeListData } from '../../data/coffeeList.ts'
import { useEffect, useState } from 'react'
import { CoffeeCard, CoffeeInterface } from '../../components/CoffeCard/index.tsx'

export function Home(){
    const [ coffeeList, setCoffeeList ] = useState<CoffeeInterface[]>([])

    useEffect(() => {
        if(!localStorage.getItem('@coffee-delivery:coffee-list-1.0.0')){
            localStorage.setItem('@coffee-delivery:coffee-list-1.0.0', JSON.stringify(coffeeListData))
        }else{
            const storedCoffeeList = localStorage.getItem('@coffee-delivery:coffee-list-1.0.0')

            setCoffeeList(JSON.parse(storedCoffeeList!))
        }

    }, [])

    return (
        <HomeContainer>
            <Hero>
                <Background>
                    <img src={backgroundHero} alt="" />
                </Background>

                <div className='heading'>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>

                <div className='coffeImage'>
                    <img src={heroImage} alt="Copo Coffe Delivery" />
                </div>

                <div className='advatages'>
                    <div className="advantage">
                        <div className="icon">
                            <ShoppingCart width={16} weight='fill' color='#fff' />
                        </div>
                        <p>Compra simples e segura</p>
                    </div>
                    <div className="advantage">
                        <div className="icon">
                            <Package width={16} weight='fill' color='#fff' />
                        </div>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div className="advantage">
                        <div className="icon">
                            <Timer width={16} weight='fill' color='#fff' />
                        </div>
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div className="advantage">
                        <div className="icon">
                            <Coffee width={16} weight='fill' color='#fff' />
                        </div>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </div>
            </Hero>

            <CoffeList>
                <h2>Nossos cafés</h2>

                <div className="coffeeGrid">
                    {coffeeList.map((coffee) => {
                        return(
                            <div key={coffee.id}>
                                <CoffeeCard
                                    coffee={coffee}
                                />
                            </div>
                        )
                    })}
                    </div>
            </CoffeList>
        </HomeContainer>
    )
}