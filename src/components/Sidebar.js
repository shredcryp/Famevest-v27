import React from 'react'
import "./Sidebar.css"
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

function Sidebar() {
  return (
 
    <html>
    
        <body>
        <div className="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar">
       

            <ul className="list-unstyled components">
         
                <li className="active">
                    <a href="/userprofile" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}><PersonIcon/> Profile</a>
                 
                    
                </li>
                <li>
                    <a href="/wallet" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}><AccountBalanceWalletRoundedIcon/> Wallet </a>

                </li>
                <li>
                    <a href="/portfolio" data-toggle="collapse" aria-expanded="false" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}><EqualizerRoundedIcon/>{'  '}  Portfolio</a>
                   
                </li>
                <li>
                    <a href="/watchlist" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}> <BookmarkRoundedIcon/> {'  '}  Watchlist</a>
                </li>
                <li>
                    <a href="/inbox" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}><MailRoundedIcon/>{'  '}  Inbox</a>
                </li>
                <li>
                    <a href="/notes" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}><CreateRoundedIcon/>  {'  '} Notes</a>
                </li>
                <li>
                    <a href="/more" style={{textDecoration:"none",color:"white",display:"flex", alignItems:"center", fontSize:"large"}}><UnfoldMoreRoundedIcon/>   More</a>
                </li>
            </ul>
        </nav>


    </div>
        </body>
    </html>
    
      
  )
  
}

export default Sidebar
