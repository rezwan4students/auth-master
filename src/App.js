
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';

import Login from './components/Login/Login';

import RequireAuth from './components/RequireAuth/RequireAuth';


import Services from './components/Services/Services';
import SignUp from './components/SignUp/SignUp';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Reset from './components/Reset/Reset';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Services></Services>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path ='/services/:id' element={<Services></Services>}></Route>
        <Route path ='/about' element={<About></About>}></Route>

               
        <Route path='/checkout' element={
          <RequireAuth>
           <Checkout></Checkout>
           </RequireAuth>
        }></Route>
       
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
     
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
