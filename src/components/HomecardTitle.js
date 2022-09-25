import React from 'react'
import "./HomecardTitle.css"
import VerifiedIcon from '@mui/icons-material/Verified';

function HomecardTitle() {
  return  ( <>
   
    <div className='titleCard'>
      <div className="title" >
     <div className="title-body">
      
  
    
      {/* Name of the tocken */}

    <div className='titleCoin'> Name </div>


         {/* --------------*/}

         
         {/* 24 hr change*/}
         <div className='titleChange'>
          24 change
         </div>

         {/*Market Cap*/}
         <div className='titleMarketCap'>
          Market Cap
         </div>

         {/*7-d graph*/}
         <div className='titlegraph'> 
          7d graph
          </div>


          {/*Price*/}
          <div className='titlePrice'>
            Price
          </div>

          
    </div>
    </div>
    </div>
     

 
     </>
  )
}

export default HomecardTitle