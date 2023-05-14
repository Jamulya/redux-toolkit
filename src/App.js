import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import store from './Redux/Store';

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>

   </Provider>
  );
}

export default App;
