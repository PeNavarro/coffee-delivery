import { useContext } from "react";
import { SuccessContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";

export function Success(){
    const { orderData } = useContext(CartContext)
    console.log(orderData)

    return(
        <SuccessContainer>
            
        </SuccessContainer>
    )
}