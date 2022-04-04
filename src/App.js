import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home"
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home> }></Route>
       <Route path="/home" element={<Home></Home> }></Route>
       <Route path="/reviews" element={<Reviews></Reviews>}></Route>
       

     </Routes>
    </div>
  );
}

export default App;
