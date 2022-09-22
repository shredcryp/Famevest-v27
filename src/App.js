import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Wallet from './components/Wallet';

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