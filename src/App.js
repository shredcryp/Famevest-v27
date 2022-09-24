import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Wallet from './components/Wallet';
import HomeCard from "./components/HomeCard";
import ReactDOM from 'react-dom';
import Profile from "./pages/Profile";
import Portfolio from "./components/Portfolio"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    
    <>
    <Navbar/>
    <div style={{display: 'flex'}}>
    <Sidebar/>
<<<<<<< HEAD
    <Router>
    <Routes>
        <Route exact path="/" element={<HomeCard/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
       
      </Routes>
    </Router>
   
    </div>
    {/* <Navbar/>
    <div style={{display:"flex"}}>
    <Sidebar/>
    <HomeCard/>
    </div>
    <Profile/> */}
=======
    <Wallet/>
    </div>
>>>>>>> 9097fd75aaa77667a3a6271763a77388cee7e561
    </>
  );
}

export default App;