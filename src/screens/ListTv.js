import { useEffect ,useState} from "react";
import { getTvShows } from "../config/api_s";
import SelectForm from "../forms/selectForm";
import MovieList from "./MovieList";



const ListTv = ({navigation}) => {
    
    let [tvShows, settvShows] = useState([]);
    const selectTvOptions = [
        ['Popular', 'popular'],
        ['Airing Today', 'airing_today'],
        ['On the Air', 'on_the_air'],
        ['Top Rated', 'top_rated'],
      ];
      
    const listType = 'tv';
    useEffect(() => {
        onTypeChange('popular');
    }, []);

    const onTypeChange = (type) => {
        getTvShows(type).then(
            (result) => {
                settvShows(result)
            },
            (err) => {
                alert("error", `${err}`);
            }
        );
    };

    return (
        <>
            <SelectForm onTypeChange={onTypeChange} selectOptions={selectTvOptions} />
            <MovieList list={tvShows} navigation={navigation} listType={listType}/>
        </>
    );
}


export default ListTv;
