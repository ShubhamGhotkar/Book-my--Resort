
import { Routes, Route} from 'react-router-dom';
import PopularMovie from "./component/Popular Movie/PopularMovie";
import TopRatedMovie from "./component/Top Rated Movie/TopRatedMovie";
import UpcomingMovie from "./component/Upcoming Movie/UpcomingMovie";
import MovieDetails from "./component/Movie Details/Details/MovieDetails";

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='*' element = {< PopularMovie/>}/>
        <Route path='/popular/:id' element = {<PopularMovie />}/>
        <Route path='/topratedmovie' element={<TopRatedMovie />}/>
        <Route path='/upcomingmovie'element={<UpcomingMovie />}/>
        <Route path='/moviedetails' element={<MovieDetails />}/> 
      </Routes>
    </div>
   
  )
   

}

export default App;
