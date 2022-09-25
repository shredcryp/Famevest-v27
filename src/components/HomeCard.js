import React from 'react'
import "./HomeCard.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import HomecardTitles from './HomecardTitle';
function HomeCard() {
  return  ( <>
  
    <div className=' Main'>
    <HomecardTitles/>
    <div className='HomeCard'>
      <div className="card" >
     <div className="card-body">
      
      <div className='cardProfile'>
      <img src="https://th.bing.com/th/id/OIP.m1J7NA55Yagq9dpzEgGUPQHaD4?pid=ImgDet&rs=1"></img>
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
          <img src='https://th.bing.com/th/id/R.94f6707208f877e64b31c36b65f17855?rik=UY5q2%2fK2wQA6NA&riu=http%3a%2f%2fwww.cobdencentre.org%2fwp-content%2fuploads%2f2017%2f07%2fbitcoin_chart_since_march_2017_-_bitcoincharts_com.png&ehk=JGFojpDg81TIu3rxefq5xS4hhDf83NWHz09mZNoOtDI%3d&risl=&pid=ImgRaw&r=0'>
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