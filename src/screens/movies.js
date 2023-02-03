import { useEffect, useState } from "react";
import { getMovies } from "../config/api_s";
import SelectForm from "../forms/selectForm";
import MovieList from "./MovieList";

const selectOptions = [
    ['Popular', 'popular'],
    ['Now Playing', 'on_the_air'],
    ['Top Rated', 'top_rated'],
    ['Upcoming', 'upcoming'],
];
const ListMovies = ({ navigation }) => {
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        onTypeChange('popular');
    }, []);

    const onTypeChange = (type) => {
        getMovies(type).then(
            (result) => {
                setMovies(result)
            },
            (err) => {
                alert("error", `${err}`);
            }
        );
    };

    return (
        <>
            <SelectForm onTypeChange={onTypeChange} selectOptions={selectOptions} />
            <MovieList list={movies} navigation={navigation} />
        </>
    );
}

export default ListMovies;