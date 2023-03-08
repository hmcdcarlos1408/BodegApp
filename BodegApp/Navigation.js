import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import Example from "./Screens/SignupScreen"

const Tab= createBottomTabNavigator();


function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Example" component={Example}/>
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
