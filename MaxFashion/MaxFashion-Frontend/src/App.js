
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/Footer/Footer';
import BoysPage from './components/MainPages/BoysPage/BoysPage';
import GirlsPage from './components/MainPages/GirlsPage/GirlsPage';
import MenPage from './components/MainPages/MenPage/MenPage';
import MensAppendData from './components/MainPages/MenPage/MensAppendData';
import WomenPage from './components/MainPages/WomenPage/WomenPage';



import Navbar from './components/Navbar/Navbar';


function App() {
 

  return (
    <div >
   {/* <Register/> */}
  {/* <Login/>  */}
   {/* <Footer/> */}
  <Navbar/>
  {/* <WomenPage/> */}
  {/* <MenPage/> */}
  {/* <GirlsPage/> */}
  {/* <BoysPage/> */}
  <MensAppendData/>
    </div>
  );
}

export default App;
