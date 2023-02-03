import { Center, Text } from "native-base";
import { useState } from "react";
import { getSearchResults } from "../config/api_s";
import SearchForm from "../forms/SearchForm";
import MovieList from "./MovieList";


const SearchMovie = ({ navigation }) => {


    let [searchResult, setSearchResult] = useState('');
    let [searchQuery, setSearchQuery] = useState('');

    const onSearchClick = (searchQuery, type) => {
        setSearchQuery(searchQuery);
        getSearchResults(searchQuery, type).then(
            (result) => {
                setSearchResult(result);
            },
            (error) => {
                alert('Error', `Something went wrong! ${error}`);
            }
        );
    };
    const emptyList = () => {
        setSearchResult('');
    };

    return (
        <>
            <SearchForm onSearchClick={onSearchClick} emptyList={emptyList} />
            {searchQuery && searchResult ? (
                <MovieList list={searchResult} navigation={navigation} />
            ) : (
                <Center>
                    <Text fontSize={20} fontWeight="bold" color={'#444'}>
                        Please Initiate the search
                    </Text>
                </Center>
            )}
        </>
    )
}

export default SearchMovie;