import React from 'react'
import './Myprofile.css'

function Myprofile() {
    return (
        <>
        <div class="something">
        <section>
            <label>Wallet address: </label>
            <input type="text" value="0xa7a3A2eE2E20D45a08d0C97c9F63805008086312" />
        </section>
        <section>
            <label>Email:</label>
            <input type="text" value="shreedhar7bpatil@gmail.com" />
        </section>
        <section>
            <label>Phone no.:</label>
            <input type="text" value="9328233256" />
        </section>
        <section>
            <label>Identification:</label>
            <input type="text" value="Social Security Number Verified" />
        </section>
        <section>
            <label>Password:</label>
            <input type="password" value="passwordfilledalready" />
        </section>
    </div>
        </>
    )
}

export default Myprofile