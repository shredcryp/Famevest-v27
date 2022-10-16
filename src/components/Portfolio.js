import React from 'react'
import HomeCard from './HomeCard'
import PortfolioCardTitles from './PortfolioCardTitles'
import PortfolioCard from './PortfolioCard'
import "./Portfolio.css"
import bargraph from '../images/bargraph.png'


function Portfolio() {
    return (
        <>
            <div className="upperandbottom">
                <div className="bargraphandinvestedcard">
                    <div className="bargraph">
                        <h3>These are your current investments in social currencies</h3>
                        <img src={bargraph} alt="" />
                    </div>
                    <div className="investedcard">
                        <h2>Total invested</h2>
                        <h1>52,459.54 Fcoin</h1>
                        <h3>To see all indivisual transactions with time go to Wallet</h3>
                    </div>
                </div>

                <div className="portfoliobottomlist">
                    <PortfolioCardTitles />
                    <PortfolioCard />
                </div>
            </div>
        </>
    )

}

export default Portfolio