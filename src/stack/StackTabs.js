import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "native-base";

import ListMovies from '../screens/movies';
import SearchMovie from "../screens/SearchMovie";


const Tab = createMaterialTopTabNavigator();

const StackTabs = () => (
    <Tab.Navigator initialRouteName="MoviesScreen">
    <Tab.Screen
      name="MoviesScreen"
      options={{
        title: () => <Text>Movies</Text>,
      }}
      component={ListMovies}
    />
    <Tab.Screen
      name="Search Results"
      options={{
        title: () => <Text>Search Results</Text>,
      }}
      component={SearchMovie}
    />
    <Tab.Screen
      name="TV Shows"
      options={{
        title: () => <Text>TV Shows</Text>,
      }}
      component={ListMovies}
    />
  </Tab.Navigator>

)

export default StackTabs;
