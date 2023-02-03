import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "native-base";
import view from "react-native"


import StackTabs from './StackTabs';


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
            
        </Stack.Navigator>
    </NavigationContainer>

)

export default AppStack;