import React from "react"
import data from "../data"
import Travel from "./Travel"

export default function Main(){
    const travelElement = data.map(item => <Travel key={item.title} {...item} />)
    return (
        <div className="main">
            {travelElement}
        </div>
    )
}