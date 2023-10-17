import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [jsonMovie, setJsonMovie] = useState({});
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setJsonMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {/* <h1>Detail</h1> */}
            <img src={jsonMovie.medium_cover_image} alt="movie poster" />
            <div>
                {jsonMovie.title} | {jsonMovie.year}년 | {jsonMovie.runtime}분
            </div>
            <div>
                rating : {jsonMovie.rating} | genres : {jsonMovie.genres}
            </div>
            <p>Synopsis : {jsonMovie.description_intro}</p>
        </div>
    );
}
export default Detail;
