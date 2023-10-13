import { Header } from "../../components/Header/index.tsx"
import { DefaultLayoutContainer } from "./styles.ts"
import { Outlet } from "react-router-dom"

export function DefaultLayout(){
    return(
        <DefaultLayoutContainer>
            <Header />
            <Outlet />
        </DefaultLayoutContainer>
    )
}