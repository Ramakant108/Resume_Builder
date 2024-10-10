import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Detailindex from './Component/Detailpage/Detailfilingpage/Detailindexpage';

import Myrsume from './Component/MyResume/Myresume';
import About from './Component/About/About';


function App() {
  return <div>
  <BrowserRouter>
   <div>
   <Navbar></Navbar>
   </div>
   <div>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/detailpage/*' element={<Detailindex/>}>
    </Route>
    <Route path='/myresume' element={<Myrsume/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Routes>
  </div>
  </BrowserRouter>
  </div>
  
  
}

export default App;
