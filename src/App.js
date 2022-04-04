import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/home" element={<Home></Home> }></Route>
     </Routes>
    </div>
  );
}

export default App;
