import { CoffeeCardContainer } from './styles.ts'

export interface CoffeeInterface{
    id: string,
    name: string,
}

export function CoffeeCard({name}: CoffeeInterface){
    return(
        <CoffeeCardContainer>
            <h3>{name}</h3>
        </CoffeeCardContainer>
    )
}