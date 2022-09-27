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
      
    
      {/* Name of the tocken */}

    <div className='cardCoin'> $ElonMusk <VerifiedIcon/>
    <div className='category'>Entrepenure</div>
    </div>
  

         {/* --------------*/}

         
         {/* 24 hr change*/}
         <div className='cardChange'>
          +12.4
         </div>

         {/*Market Cap*/}
         <div className='cardMarketCap'>
          12,0000 $
         </div>

         {/*7-d graph*/}
         <div className='cardGraph'> 
          <img src={smallgraph}>
          </img>
          </div>


          {/*Price*/}
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