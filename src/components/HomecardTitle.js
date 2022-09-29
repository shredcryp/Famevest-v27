import React from 'react'
import "./HomecardTitle.css"
import VerifiedIcon from '@mui/icons-material/Verified';

function HomecardTitle() {
  return (<>

    <div className='titleCard'>
      <div className="title" >
        <div className="title-body">

        <div className='empty'>
             
          </div>

          <div className='titleCoin'>
            Name
          </div>

          <div className='titleChange'>
            24 change
          </div>

          <div className='titleMarketCap'>
            Market Cap
          </div>

          <div className='titlegraph'>
            7d graph
          </div>

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