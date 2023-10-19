import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading😀</span>
                </div>
            ) : (
                <div className={styles.movie}>
                    <img
                        src={movieDetails.medium_cover_image}
                        alt={movieDetails.title}
                        className={styles.movie__img}
                    />
                    <h2 className={styles.movie__title}>
                        {movieDetails.title}
                    </h2>
                    <span className={styles.movie__year}>
                        {movieDetails.year}&nbsp;|&nbsp;
                        {`⭐${movieDetails.rating}`}&nbsp;|&nbsp;
                        {movieDetails.genres.map((v) => v + ", ")}&nbsp;|&nbsp;
                        {movieDetails.runtime + "분"}
                    </span>
                    <p>{movieDetails.description_full}</p>
                </div>
            )}
        </div>
    );
};
export default Detail;
