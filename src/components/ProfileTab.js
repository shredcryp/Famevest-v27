import React from 'react'
import "./ProfileTab.css"
import VerifiedIcon from '@mui/icons-material/Verified';
function ProfileTab() {
  return (
    <div className='ProfileTab'>
<div className='topTrendButton'>
<button type="button" className="btn btn-primary btn-lg btn-block ">Top Trending Creators</button>
</div>
  
    <div className='tableBody'>
    <table className="table ">

<tbody>
  <tr >

    <td className='TableName'>$HarryStyles <VerifiedIcon/></td>
    <td className='TableChange'>+23</td>
    <td className='TablePrice'>$318</td>
  </tr>
  <tr>
  
    <td className='TableName'>$TomCruise</td>
    <td className='TableChange'>+21</td>
    <td className='TablePrice'>$302t</td>

  </tr>
  <tr>

    <td className='TableName'>$JhonnyDepp</td>
    <td className='TableChange'>+23</td>
    <td className='TablePrice'>$290</td>
  </tr>
</tbody>
</table>
    </div>

</div>


  )
}

export default ProfileTab
