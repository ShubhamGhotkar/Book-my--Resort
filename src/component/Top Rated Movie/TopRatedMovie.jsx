import Data from "../Data/Data"
import '../Popular Movie/popular-movie-style.css'
import { useEffect, useState } from "react"

const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'

const TopRatedMovie = () => {

    const [TopRatedMovie, setTopRatedMovie] = useState([])

    useEffect(() => {
        try {

            fetch(URL).then((res) => res.json()).then((data) => setTopRatedMovie(data.results))
        }
        catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <main>
            <div className="movie-container">
                <Data Data={TopRatedMovie} URL={URL} />
            </div>
        </main>
    )
}

export default TopRatedMovie;