import React from "react"
import logo from "../images/logo-512x512.png"

export default function Nav(){
    return (
        <nav>
            <logo>
                <img src={logo} className="nav-logo" alt="logo" />
                <h2 className="nav-name">Jatura L.</h2>
            </logo>
            <h3 className="nav-topic">Know me better</h3>
        </nav>
    )
}