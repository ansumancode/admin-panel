import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Client from './pages/Client';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/About' element={<About />}> </Route>
          <Route path='/Client' element={<Client />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
