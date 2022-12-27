import { NavigateBeforeRounded } from "@mui/icons-material";
import React, { useState, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import VerifiedIcon from "@mui/icons-material/Verified";
import elonbanner from "../images/elonbanner.png";
import elonprofile from "../images/elonprofile.png";
import maingraph from "../images/biggraph.png";
import arrow from "../images/arrow.png";

import "./Profile.css";

function Profile() {
  const [fcoins, setfcoins] = useState(0);
  const [err, seterr] = useState(false);
  const [creatorcoins, setcreatorcoins] = useState(0);
  const [possiblevalue, setpossiblevalue] = useState(0);
  const [cfi, setcfi] = useState(0);
  const [cccc, setcccc] = useState(0);
  const [fcoinvalue, setfcoinvalue] = useState(0);
  const [creatorcoins2, setcreatorcoins2] = useState(0);
  const [possiblefcoinvalue, setpossiblefcoinvalue] = useState(0);
  const [email, setemail] = useState("");

  //Now that the user information is stored inside the cookie we need some way to retrive the cookie and get the information
  useLayoutEffect(() => {
    //check local token or something
    async function getid() {
      let finaldata = {};
      let _data = await document.cookie.split(";");
      await _data.forEach((element, i) => {
        let temp = element.split("=");
        let key = temp[0];
        let value = temp[1];
        let tempobj = {
          [`${key}`]: value,
        };
        Object.assign(finaldata, tempobj);
      });
      let _jwt = finaldata.jwt;
      // jwtglobal = finaldata.jwt;
      // jwtfinal.current = finaldata.jwt;
      // console.log("This is the jwt token", _jwt);
      // setjwt(_jwt);
      // jwt.current=_jwt;
      console.log("This is the jwt", _jwt);

      let data2 = await fetch("http://localhost:3001/getdetails", {
        method: "POST",
        body: JSON.stringify({
          _jwt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });

      console.log("This is the response for the data from backend", data2);
      let { fcoins, email, creatorcoins } = data2;
      console.log(fcoins, "Fcoins");
      console.log(creatorcoins, "Creatorcoins");
      setfcoins(fcoins);
      setcreatorcoins(creatorcoins);
      setemail(email);

      if (data2.error) {
        seterr(true);
      }

      // console.log("This is the data we get after verifying the jwt", data2);
      // id.current = data2.data;
      // idglobal = data2.data;
      // userdata.current = data2.data2[0];

      //Ok so we now have the jwt for the profile
      //The next step is to get the data from the jwt
      //There are actually two approaches
      //When accessing myprofile we need to id for us which is available from the jwt
      //When accessing other person's profile we need the id for that other person which cannot be obtained from jwt
      //Since here we are accessing myprofile we are going to take the id via jwt
    }

    getid();
  });

  if (err) {
    return <div>The user needs to login to access the profile</div>;
  }

  async function changing(value) {
    console.log("Yes we are changing the value of the fcoin");
    console.log(value);
    await setfcoinvalue(value);
    let result = await fetch("http://localhost:3001/creatorcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fcoins: value,
      }),
    });

    let ans = await result.json();
    // console.log("These are the values that we got from the backend", ans);
    let { CCV, CFI, CCCC } = ans;
    console.log(
      ans,
      "This is the data that is received from the backend after the value is set"
    );
    console.log(CCV);
    // console.log(typeof CCV);
    console.log(CFI);
    // console.log(typeof CFI);
    console.log(CCCC);
    // console.log(typeof CCCC);
    setpossiblevalue(CCV);
    setcfi(CFI);
    setcccc(CCCC);
  }

  const buycreatorcoins = async () => {
    //This is the function where we are calling the smart contract function to buy the creator coins
    //At the same time we are also updating the database
    //Firstly we are decreasing the value of fcoins that the user holds
    //Secondly we are also changing the values of the CFI and the CCCC

    //Firstly we will decrease the fcoin value
    let result = await fetch("http://localhost:3001/decreasefcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fcoins: fcoins - fcoinvalue,
        email,
        creatorcoinsfinal: creatorcoins + possiblevalue,
      }),
    });

    let data = await result.json();
    console.log("This is the data", data);
    if (data.error) {
      alert(data.error);
    } else {
      console.log("The buying function has been called");
      //Once we are here it means that the fcoin value has been updated now its the time to update the value of the CFI and CCCC
      let result = await fetch("http://localhost:3001/updatevalues", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cfi,
          cccc,
        }),
      });
    }
  };

  async function changing2(value) {
    // console.log("Yes we are changing the value of the fcoin");
    await setcreatorcoins2(value);
    let result = await fetch("http://localhost:3001/creatorcoins2", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        creatorcoins: value,
      }),
    });

    let ans = await result.json();
    // console.log("These are the values that we got from the backend", ans);
    let { UG, CFI, CCCC } = ans;
    console.log(
      ans,
      "This is the data that is received from the backend after the value is set"
    );
    // console.log(CCV);
    // console.log(typeof CCV);
    // console.log(CFI);
    // console.log(typeof CFI);
    // console.log(CCCC);
    // console.log(typeof CCCC);
    // setcreatorcoins(CCV);
    setpossiblefcoinvalue(UG);
    setcfi(CFI);
    setcccc(CCCC);
  }

  // const buycreatorcoins2 = async () => {};
  const buycreatorcoins2 = async () => {
    //This is the function where we are calling the smart contract function to buy the creator coins
    //At the same time we are also updating the database
    //Firstly we are decreasing the value of fcoins that the user holds
    //Secondly we are also changing the values of the CFI and the CCCC

    //Firstly we will decrease the fcoin value
    let result = await fetch("http://localhost:3001/increasefcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fcoins: fcoins + possiblefcoinvalue,
        email,
        creatorcoinsfinal: creatorcoins - creatorcoins2,
      }),
    });

    let data = await result.json();
    console.log("This is the data", data);
    if (data.error) {
      alert(data.error);
    } else {
      console.log("The buying function has been called");
      //Once we are here it means that the fcoin value has been updated now its the time to update the value of the CFI and CCCC
      let result = await fetch("http://localhost:3001/updatevalues", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cfi,
          cccc,
        }),
      });
    }
  };
  return (
    <>
      <div className="ProfileBody" style={{ display: "flex" }}>
        <div className="wholeprofile">
          <div className="profileimages">
            <img src={elonbanner} />
            <img class="propic" src={elonprofile} />
          </div>
          <div className="socialinfo">
            <h2>Elon Musk</h2>
            <h3>$elonmusk</h3>
            <div className="bioownership">
              <h4>
                Entrepreneur, CEO Tesla Motors,<br></br> Spacex, Boring company
                and Open AI.<br></br> About to buy Twitter.
              </h4>
              <h4>
                If you are “elonmusk” on twitter: <br></br> Tweet you public
                key. <br></br> You username will be transferred within<br></br>{" "}
                24 hours via DMs.
              </h4>
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
                <input
                  type="text"
                  placeholder="Enter Fcoins"
                  onChange={(e) => {
                    changing(e.target.value);
                  }}
                />
              </div>
              <div className="socialcurrencyreturn">
                <input
                  type="text"
                  placeholder="$elonmusk coins"
                  value={possiblevalue}
                />
              </div>
              <div className="buybalance">
                <div className="lowerbuyinput">
                  <button
                    onClick={() => {
                      buycreatorcoins();
                    }}
                  >
                    Buy
                  </button>
                  <h3>Fcoins: {fcoins}</h3>
                </div>
              </div>
            </div>

            <div className="sellinput">
              <div className="socialcurrencyamount">
                <input
                  type="text"
                  placeholder="Enter $currency"
                  onChange={(e) => {
                    changing2(e.target.value);
                  }}
                />
              </div>
              <div className="fcoinreturn">
                <input
                  type="text"
                  placeholder="Fcoins in return"
                  value={possiblefcoinvalue}
                />
              </div>
              <div className="sellbalance">
                <div className="lowersellinput">
                  <button
                    onClick={() => {
                      buycreatorcoins2();
                    }}
                  >
                    Sell
                  </button>
                  <h3>$Balance: {creatorcoins}</h3>
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
  );
}

export default Profile;
