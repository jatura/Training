import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return (
        <div className="nav-bar">
            <FontAwesomeIcon className="icon" icon={faEarth} />
            <h1>My Dream Destinaion</h1>
        </div>
    )
}