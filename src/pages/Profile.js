import { NavigateBeforeRounded } from '@mui/icons-material'
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import VerifiedIcon from '@mui/icons-material/Verified';
import elonbanner from '../images/elonbanner.png';
import elonprofile from '../images/elonprofile.png';
import maingraph from '../images/biggraph.png';
import arrow from '../images/arrow.png';

import "./Profile.css"

function Profile() {
  return (
    <>
      <div className='ProfileBody' style={{ display: "flex" }}>
        <div className="wholeprofile">
          <div className="profileimages">
            <img src={elonbanner} />
            <img class="propic" src={elonprofile} />
          </div>
          <div className="socialinfo">
            <h2>Elon Musk</h2>
            <h3>$elonmusk</h3>
            <div className="bioownership">
              <h4>Entrepreneur, CEO Tesla Motors,<br></br> Spacex, Boring company and Open AI.<br></br> About to buy Twitter.</h4>
              <h4>If you are “elonmusk” on twitter: <br></br> Tweet you public key. <br></br> You username will be transferred within<br></br> 24 hours via DMs.</h4>
            </div>
          </div>
          <div className="marketinfo">
            <div className="circulation">
              <h2>Coins in circulation</h2>
              <h3>9,956.093</h3>
            </div>
            <div className="marketcap">
              <h2>Market cap</h2>
              <h3>71,479.172 Fcoins</h3>
            </div>
            <div className="currentprice">
              <h2>Current price</h2>
              <h3>$0</h3>
            </div>
          </div>
          <div className="graphinputs"></div>

          <div className="buysell">

            <div className="buyinput">
              <div className="fcoinamount">
                <input type="text" placeholder="Enter Fcoins" />
              </div>
              <div className="socialcurrencyreturn">
                <input type="text" placeholder="$elonmusk coins" />
              </div>
              <div className="buybalance">
                <div className="lowerbuyinput">
                  <button>Buy</button>
                  <h3>Fcoins: 22734.52</h3>
                </div>
              </div>
            </div>


            <div className="sellinput">
              <div className="socialcurrencyamount">
                <input type="text" placeholder="Enter $currency" />
              </div>
              <div className="fcoinreturn">
                <input type="text" placeholder="Fcoins in return" />
              </div>
              <div className="sellbalance">
                <div className="lowersellinput">
                  <button>Sell</button>
                  <h3>$Balance: 22734.52</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="maingraph">
              <img src={maingraph} />
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
