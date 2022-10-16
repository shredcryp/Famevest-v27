import React from 'react'
import "./PortfolioCard.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import smallgraph from '../images/smallgraph.png';
import elonprofile from '../images/elonprofile.png';
import PortfolioCardTitles from './PortfolioCardTitles';

function PortfolioCard() {
  return (
    <div>
      <div className="Main">
        <div className="HomeCard">
          <a href="/profile">
            <div className="card" >
              <div className="card-body">

                <div className='cardProfile'>
                  <img src={elonprofile} alt="" />
                </div>

                <div className='cardCoin'>
                  $elonmusk
                  <VerifiedIcon />
                  <div className='category'>
                    Entrepreneur
                  </div>
                </div>

                <div className='Holdings' >
                  14,157.64 Fcoins
                </div>

                <div className='cardChange' style={{color: "#42B72A"}}> 
                  +12.4
                </div>

                <div className='Price'>
                  $3589.72
                </div>
               

                <div className='cardGraph'>
                  <img src={smallgraph}></img>
                </div>

                <div className='Profit/loss'>
                  +12.139 Fcoins
                </div>

              </div>
            </div>
          </a>
        </div>
      </div>



    </div>
  )
}

export default PortfolioCard
