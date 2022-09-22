import React from 'react'
import "./Wallet.css"
function Wallet() {
    return (
        <>
        <div class="wallet-leftside">

            <h3>To start investing in creators add balance to your account</h3>
            <div className="balancebox">
                <h2>Balance available:</h2>
                <h1>52,459.54 Fcoins</h1>
            </div>

            <div className="enteramount">
                <input type="text" placeholder="Enter ETH amount to add..." />
            </div>

            <div className="withdrawaddamount">
                <div className="withdrawbutton">
                    <button>Withdraw</button>
                </div>

                <div className="addamountbutton">
                    <button>Add Balance</button>
                </div>
            </div>

        </div>

        <div className="wallet-rightside">

            <div className="walletpart">
                <h3>Wallet address</h3>
                <div class="walletaddressline">
                    <h3>0xa7a3A2eE2E20D45a08d0C97c9F63805008086312</h3>
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
        </>
    )

}

export default Wallet