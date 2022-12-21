import logo from './logo.svg';

import { Routes, Route } from 'react-router-dom'
import TermConditon from './component/pages/TermCondition';
import GuestPolicy from './component/pages/GuestPolicy';
import PrivacyPolicy from './component/pages/PrivacyPolicy';
import NotFound from './component/pending/NotFound';
import Home from './component/Home';
import Room from './Rooms/Room';
import Error from './component/Error';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/room' element={<Room />} />
      <Route path='/termandcondition' element={<TermConditon />} />
      <Route path='/privacypolicy' element={<PrivacyPolicy />} />
      <Route path='/guestpolicy' element={<GuestPolicy />} />
      <Route path='/pageonworking' element={<NotFound />} />
      <Route path='*' element={<Error />} />

    </Routes>

  );
}

export default App;
