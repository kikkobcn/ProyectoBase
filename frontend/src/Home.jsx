import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom"
export const Home = () =>{
    return (
    <div className="container d-flex flex-column justify-content-between context">
        <Header>Header</Header>
        <div className="flex-grow-1 area">
            <Outlet></Outlet>
            <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>
        <Footer>Footer</Footer>
        </div>
    )
}