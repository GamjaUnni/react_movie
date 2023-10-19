import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const movieData = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(movieData.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                "loading..."
            ) : (
                <div>
                    {movies.map((v) => (
                        <Movie
                            key={v.id}
                            id={v.id}
                            coverImg={v.medium_cover_image}
                            title={v.title}
                            summary={v.summary}
                            genres={v.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default Home;
