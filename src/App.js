import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addrecipie from './Addrecipie';
import View from './View';
import Search from './Search';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  
  <Route path='/' exact element={<Addrecipie/>}/>
      <Route path='/search' exact element={<Search/>}/>
      <Route path='/view' exact element={<View/>}/>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
