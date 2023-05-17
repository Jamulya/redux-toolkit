import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import store from './Redux/Store';
import Cart from './pages/Cart';
import Home from './pages/Home'

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>

   </Provider>
  );
}

export default App;
