import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Landing from './../pages/Landing';
import GiveClasses from './../pages/GiveClasses';
import StudyTab from './StudyTab';



const {Navigator, Screen} = createStackNavigator()

function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="StudyTab" component={StudyTab} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack
