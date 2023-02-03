import { FlatList } from "native-base"
import ListCard from "./ListCard";

const MovieList = (props) =>{
    const { list, navigation ,listType} = props;
    return (
        <FlatList
        data={list}
        renderItem={({ item }) => (
          <ListCard
            id={item.id}
            image={item.poster_path}
            title={item.title || item.name}
            navigation={navigation}
            release_date={item.release_date}
            popularity={item.popularity}
            listType={listType}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        />
    )
};

 export default MovieList;