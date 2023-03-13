import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./Screens/HomeScreen"
import Login from "./Screens/Login";
import SignupScreen from "./Screens/SignupScreen";

const Tab= createBottomTabNavigator();


function Tabs(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Login} />
        <Tab.Screen name="Iniciar Sesion" component={HomeScreen} />    
        <Tab.Screen name="Registro" component={SignupScreen} />

        
      
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
