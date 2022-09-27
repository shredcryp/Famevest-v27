import React from 'react'
import "./HomeCard.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import smallgraph from '../images/smallgraph.png';
import HomecardTitles from './HomecardTitle';
import elonprofile from '../images/elonprofile.png';
function HomeCard() {
  return  ( <>
  
    <div className=' Main'>
    <HomecardTitles/>
    <div className='HomeCard'>
      <div className="card" >
     <div className="card-body">
      
      <div className='cardProfile'>
      <img src={elonprofile} alt="" />
      </div>

    <div className='cardCoin'> <a href="/profile">$elonmusk</a> <VerifiedIcon/>
    <div className='category'>Entrepreneur</div>
    </div>
         <div className='cardChange'>
          +12.4
         </div>

         <div className='cardMarketCap'>
          12,0000 $
         </div>

         <div className='cardGraph'> 
          <img src={smallgraph}>
          </img>
          </div>

          <div className='cardPrice'>
            $ 120
          </div>
       
          </div>
        </div>
      </div>
    </div>
    
 
     </>
  )
}

export default HomeCard