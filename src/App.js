import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Room from './component/Room';
import Error from './component/Error';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room' element={<Room />} />
      <Route path='*' element={<Error />} />
    </Routes>

  );
}

export default App;
