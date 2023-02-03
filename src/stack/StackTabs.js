import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "native-base";
import ListTv from "../screens/ListTv";

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
        title: () => <Text>Search Shows</Text>,
      }}
      component={SearchMovie}
    />
    <Tab.Screen
      name="TV Shows"
      options={{
        title: () => <Text>TV Shows</Text>,
      }}
      component={ListTv}
    />
  </Tab.Navigator>

)

export default StackTabs;
