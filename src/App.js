import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Wallet from './components/Wallet';
import HomeCard from "./components/HomeCard";
import ReactDOM from 'react-dom';
import Profile from "./pages/Profile";
import Portfolio from "./components/Portfolio";
import Myprofile from "./components/Myprofile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return ( 
    <>
    <Navbar/>
    <div style={{display: 'flex'}}>
    <Sidebar/>
    <Router>
      <Routes>
          <Route exact path="/" element={<HomeCard/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/myprofile" element={<Myprofile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </Router>
    </div>
    </>
  )
}


export default App