import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Room from './Rooms/Room';
import Error from './component/Error';
import TermConditon from './component/pages/TermCondition';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/room' element={<Room />} />
      <Route path='*' element={<Error />} />
      {/* <TermConditon /> */}
    </Routes>

  );
}

export default App;
