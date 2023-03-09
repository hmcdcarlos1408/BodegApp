import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./Screens/HomeScreen"
import Login from "./Screens/Login";

const Tab= createBottomTabNavigator();


function Tabs(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={HomeScreen} />
      
      </Tab.Navigator>
    
      
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}
