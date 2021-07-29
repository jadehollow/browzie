import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("make an api request", id);
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=9cb6379847968c53798b890eb3898f8d&language=en-US`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovieDetails(data);
                setIsLoading(false);
            });
    }, [id]);


    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />;
        }
        if (movieDetails) {
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
            const genericPoster =
            `${process.env.PUBLIC_URL}/assets/NoImage.jpg`;


            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />

                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                {movieDetails.poster_path == null ? (
                                    <img
                                        src={genericPoster}
                                        alt='...'
                                        className='img-fluid shadow rounded'
                                    />
                                ) : (
                                    <img
                                        src={posterPath}
                                        alt='...'
                                        className='img-fluid shadow rounded'
                                    />
                                )}
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">{movieDetails.overview}</p>
                                <p className="lead">Release Status: {movieDetails.status}</p>
                                <p className="lead">Release Date: {movieDetails.release_date}</p>
                                <p className="lead">Average Rating: {movieDetails.vote_average}</p>
                                {/* <p className="lead">{movieDetails.belongs_to_collection}</p> */}
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    return renderMovieDetails();
};

export default MovieView;