import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmDetails from '../screens/FilmDetails';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen
                    name="FilmDetails"
                    component={FilmDetails}
                    options={{
                        headerShown: false,
                        presentation: 'containedTransparentModal',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;