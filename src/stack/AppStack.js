import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text } from "native-base";
import StackTabs from './StackTabs';
import ShowDetails from "../screens/ShowDetails";


const Stack = createNativeStackNavigator();
const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Movies"
                component={StackTabs}
                options={{
                    title: 'Movies App',
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#ffffff'
                    },
                }}
            />
            <Stack.Screen
                name="ShowDetails"
                component={ShowDetails}
                options={({ route }) => ({
                    id: route.params.id,

                    headerTitle: () => (
                        <Text fontSize={14} color="blue.400" textAlign="left">
                            Back to List
                            <Text fontSize={16} color="black" >
                                {' '}
                                {route.params.title}
                            </Text>
                        </Text>
                    ),
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>

)

export default AppStack;