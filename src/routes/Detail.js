import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState([]);
    const getMovie = async () => {
        const movieData = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovieDetails(movieData.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieDetails);
    return (
        <h1>
            {loading ? (
                "Loading😀"
            ) : (
                <div>
                    <img
                        src={movieDetails.medium_cover_image}
                        alt={movieDetails.title}
                    />
                    <div>{movieDetails.title}</div>
                    <span>
                        {movieDetails.year}&nbsp;|&nbsp;
                        {`⭐${movieDetails.rating}`}&nbsp;|&nbsp;
                        {movieDetails.genres.map((v) => v + ", ")}&nbsp;|&nbsp;
                        {movieDetails.runtime + "분"}
                    </span>
                    <p>{movieDetails.description_full}</p>
                </div>
            )}
        </h1>
    );
};
export default Detail;
