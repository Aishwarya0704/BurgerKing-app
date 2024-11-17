import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </>
  );
}

export default App;
