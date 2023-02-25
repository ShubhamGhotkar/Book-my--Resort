import Cast from "../Cast Page/Cast";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import NewNavbar from "../../Data/NewNavbar";
import './movieDetail-style.css'


const MovieDetails = () => {
    const [MovieDetail, setMovieDetail] = useState([]);
    const [castDetails, setCastDetails] = useState([]);

    const location = useLocation();
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${location.state.id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`).then((res) => res.json()).then((data) => setMovieDetail(data))
        fetch(`https://api.themoviedb.org/3/movie/${location.state.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`).then((res) => res.json()).then((data) => setCastDetails(data.cast))

    }, [])

    return (
        <>
            <NewNavbar />
            <div className="main-container" ><br />
                <div className="detail-container" >
                    <div className="container"  >
                        <div className="img-div" >
                            <div className="img-container">
                                <img src={`https://image.tmdb.org/t/p/w500${MovieDetail.backdrop_path}`} alt="img" />
                            </div>
                            <div className="details">
                                <p className="movie-title">{MovieDetail.title}</p>
                                <p className="rating">Rating : {MovieDetail.vote_average}</p>
                                <div className="flex">
                                    <button className="time">{MovieDetail.runtime} min</button>
                                    {/* <p className="movie-details" >{ MovieDetail.genres.map((itm,ind)=><span key={ind}>{`${itm.name} ,`}</span>)}</p> */}
                                </div>
                                <p className="release-date" >Release Date : {MovieDetail.release_date}</p>
                            </div>
                        </div>
                        <div className="overview">
                            <p className="tittle">Overview</p>
                            <p className="description">{MovieDetail.overview}</p>
                        </div>
                    </div>
                    <div className="postal-div" >
                        <img src={`https://image.tmdb.org/t/p/w500${MovieDetail.poster_path}`} alt="img" />
                    </div>
                </div>
                <p className="cast-tittle">CAST</p>

                <div className="cast-container">
                    {castDetails.map((item,ind) => {
                        return (
                            <Cast prop={item} key={ind}/>
                        )
                    })}
                </div>


            </div>
        </>

    )
}

export default MovieDetails;