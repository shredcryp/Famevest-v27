import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Wallet from './components/Wallet';
import HomeCard from "./components/HomeCard";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    <Navbar/>
    <div style={{display: 'flex'}}>
    <Sidebar/>
    <Wallet/>
    </div>
    </>
  );
}

export default App;