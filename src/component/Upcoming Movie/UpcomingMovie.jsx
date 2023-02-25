import Data from "../Data/Data";
import { useEffect, useState } from "react";
import '../Popular Movie/popular-movie-style.css'

const URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'
const UpcomingMovie = () => {

    const [upcomingMovie, setUpcominMovie] = useState([]);
    useEffect(() => {
        fetch(URL).then((res) => res.json()).then((data) => setUpcominMovie(data.results))
    }, [])
    return (
        <main>
            <div className="movie-container">
                <Data Data={upcomingMovie} URL={URL} />
            </div>
        </main>
    )
}

export default UpcomingMovie;