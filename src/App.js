import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import store from './Redux/Store';
import Cart from './pages/Cart';
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login'
import ProtectedRoute from './routers/ProtectedRoute'
function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Navigate to="home"/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/cart' element={<ProtectedRoute>
        <Cart/>
      </ProtectedRoute>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>

   </Provider>
  );
}

export default App;
