import React, { useLayoutEffect, useState } from "react";
import "./Wallet.css";
import usd from "../images/usd.png";
function Wallet() {
  const [amount, setamount] = useState();
  const [fcoins, setfcoins] = useState(0);
  const [err, seterr] = useState(false);
  const [creatorcoins, setcreatorcoins] = useState(0);
  const [cfi, setcfi] = useState(0);
  const [cccc, setcccc] = useState(0);
  const [fcoinvalue, setfcoinvalue] = useState(0);

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
    setcreatorcoins(CCV);
    setcfi(CFI);
    setcccc(CCCC);
  }
  function btnclicked() {
    //This means that now the data needs to be sent to the backend
  }
  return (
    <>
      <div
        class="fullwallet"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div class="wallet-leftside">
          <h3>To start investing in creators add balance to your account</h3>
          <div className="balancebox">
            <h2>Balance available:</h2>
            <h1>{fcoins} Fcoins</h1>
          </div>

          <div className="enteramountcurrencyselector">
            <div className="enteramount">
              <input
                type="text"
                placeholder="Enter amount to add..."
                value={amount}
                onChange={(e) => {
                  changing(e.target.value);
                }}
              />
            </div>
            <form>
              <select className="currencyselector">
                <option value="USD">
                  <img src={usd} alt="" />
                  USD
                </option>
                <option value="INR">INR</option>
              </select>
            </form>
          </div>

          <div className="withdrawaddamount">
            <div className="withdrawbutton">
              <button>Withdraw</button>
            </div>

            <div className="addamountbutton">
              <button onClick={btnclicked}>Add Balance</button>
            </div>
          </div>
        </div>
        <div className="wallet-rightside" style={{ float: "right" }}>
          <div className="walletpart">
            <h3>Wallet address</h3>
            <div class="walletaddressline">
              <h3>0xa7a3A2eE2E20D45a08d0C97c9F638...</h3>
            </div>
          </div>

          <br></br>

          <div className="balancehistory">
            <table>
              <tr>
                <th>Timestamps</th>
                <th>Amount</th>
                <th>State</th>
              </tr>
              <tr>
                <td>13 days 4 hours ago</td>
                <td>2.54 Fcoin</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>7 days 23 hours ago</td>
                <td>3.29 Fcoin</td>
                <td>Withdrawn</td>
              </tr>
              <tr>
                <td>13 days 4 hours ago</td>
                <td>2.54 Fcoin</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>7 days 23 hours ago</td>
                <td>3.29 Fcoin</td>
                <td>Withdrawn</td>
              </tr>
              <tr>
                <td>13 days 4 hours ago</td>
                <td>2.54 Fcoin</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>7 days 23 hours ago</td>
                <td>3.29 Fcoin</td>
                <td>Withdrawn</td>
              </tr>
              <tr>
                <td>13 days 4 hours ago</td>
                <td>2.54 Fcoin</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>7 days 23 hours ago</td>
                <td>3.29 Fcoin</td>
                <td>Withdrawn</td>
              </tr>
              <tr>
                <td>13 days 4 hours ago</td>
                <td>2.54 Fcoin</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>7 days 23 hours ago</td>
                <td>3.29 Fcoin</td>
                <td>Withdrawn</td>
              </tr>
              <tr>
                <td>13 days 4 hours ago</td>
                <td>2.54 Fcoin</td>
                <td>Added</td>
              </tr>
              <tr>
                <td>7 days 23 hours ago</td>
                <td>3.29 Fcoin</td>
                <td>Withdrawn</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
