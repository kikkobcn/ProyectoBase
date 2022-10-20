import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"
export const Home = () =>{
    return (
    <div className="container d-flex flex-column justify-content-between todo">
        <Header>Header</Header>
        <div className="flex-grow-1">
            <Outlet></Outlet>
        </div>
        <Footer>Footer</Footer>
        </div>
    )
}