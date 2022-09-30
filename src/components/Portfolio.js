import React from 'react'
import "./Portfolio.css"
import portfoliochart from '../images/portfoliochart.png';

function Portfolio() {
    return (
        <>
        <img src={{portfoliochart}} alt="" />
        <div className="totalinvestedbox">
            <h2>Total invested</h2>
            <h1>52,459.54 Fcoin</h1>
            <h3>To see all indivisual transaction timestamps go to Wallet</h3>
        </div>

        </>
    )

}

export default Portfolio