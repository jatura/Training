import React from "react"
import Nav from "./components/Nav"
import Body from "./components/Body"
import Footer from "./components/Footer"  

export default function App(){
    return (
        <div className="container">
            <Nav />
            <Body />
            <Footer />
        </div>
    )
}