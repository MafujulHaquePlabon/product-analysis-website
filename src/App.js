import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home"
import Reviews from './components/Reviews/Reviews';
import NotFound from './components/NotFound/NotFound'
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home> }></Route>
       <Route path="/home" element={<Home></Home> }></Route>
       <Route path="/reviews" element={<Reviews></Reviews>}></Route>
       <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
       {/* <Route path="/blogs" element={}></Route>
       <Route path="/about" element={}></Route> */}
       <Route path="*" element={ <NotFound></NotFound> }></Route>

     </Routes>
    </div>
  );
}

export default App;
