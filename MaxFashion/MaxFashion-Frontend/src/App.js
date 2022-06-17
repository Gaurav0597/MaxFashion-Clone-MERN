
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CartPage from './components/Cart/CartPage';
import Footer from './components/Footer/Footer';
import BoysPage from './components/MainPages/BoysPage/BoysPage';
import GirlsPage from './components/MainPages/GirlsPage/GirlsPage';
import MenPage from './components/MainPages/MenPage/MenPage';
import MensAppendData from './components/MainPages/MenPage/MensAppendData';
import WomenPage from './components/MainPages/WomenPage/WomenPage';
import Navbar from './components/Navbar/Navbar';
import ProductDetails from './components/ProductDetailInfo/ProductDetails';


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
  {/* <MensAppendData/> */}
  {/* <ProductDetails/> */}
  <CartPage/>
    </div>
  );
}

export default App;
