import { NavigateBeforeRounded } from '@mui/icons-material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import VerifiedIcon from '@mui/icons-material/Verified';

import "./Profile.css"

function Profile() {
  return (
    <div>
     
        <div className='ProfileBody' style={{display:"flex", justifyContent:'space-between'}}>
            <div  style={{display:"flex"}}>
      
        <div className='twitterHandle'>
            <img src="https://th.bing.com/th/id/OIP.kTz0H8zeR9NQ-6sBGxeVmgHaDH?pid=ImgDet&rs=1"></img>
            <div className='mediaLinks'>
            <YouTubeIcon style={{fontSize:"xx-large",margin:"4px"}}/>
            <TwitterIcon style={{fontSize:"xx-large",margin:"4px"}}/>
            <InstagramIcon style={{fontSize:"xx-large",margin:"4px"}}/>
            </div>

<div className='ProfileText'>
<div className='profileInfo'>
                <a style={{fontSize:"x-large"}}>Elon Musk <VerifiedIcon/> </a>
                <br></br>
                <a style={{fontSize:"small"}}>$ElonMusk</a>
                <p className="info">Entrepreneur, CEO Tesla Motors, Spacex, Boring company and Open AI. About to buy Twitter.</p>
            </div>
            <div className='profileInstruction'>
           <p>If you are “elonmusk” on twitter:</p> 
           <p>1.Tweet you public key.</p>
           <p>2.You username will be transferred within
           24 hours via DMs.
           </p></div>
        </div>
</div>
       
            </div>


        </div>
      
      
    </div>
  )
}

export default Profile
