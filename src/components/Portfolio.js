import React from 'react'
import HomeCard from './HomeCard'



function Portfolio() {
    return (
  <>
       
       <div className='PortfolioBody' style={{display:"table"}}>
    

       <div className='Header' style={{display:"flex", justifyContent:"space-between", height:"1%", width:"140%"}}>

<img src="https://th.bing.com/th/id/OIP.Z5t0G19Q87Iwu_TMKHUA9AHaBe?pid=ImgDet&rs=1" style={{height:"29%",width:"45%", marginTop:"8%", marginLeft:"7%"}}></img>

<div className="card" style={{width: "24rem", height:"45rem", fontWeight:"normal", marginRight:"1%"}}>
<div className="card-body"  style={{display: "block", height:"36%", paddingLeft:"12%", paddingTop:"2%"}}>
    <h2 className="card-title" style={{color:"#7E7E7E",marginTop:"1%" }}>Total Invested </h2>
    <a className="card-text" style={{fontWeight:"bold", fontFamily:"Helvetica",marginTop:"1%",fontSize:"2.5rem"}}>52,459.54 Fcoin</a>
    <h2 className="card-text"  style={{fontWeight:"normal",marginTop:"2%",fontSize:"1.5rem"}}>≈$52,459.54</h2>
    <a href="/" className="btn btn-primary"  style={{fontWeight:"normal"}}>To see all indivisual transaction 
timestamps go to Wallet</a>
</div>
</div>
</div>

<div>

</div>

       </div>
  

        

        </>
    )

}

export default Portfolio