import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ToDoList from './pages/ToDoList';
import NewToDo from './pages/NewToDo';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#212121',
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {fontSize: 25},
          headerTintColor: '#00adb5',
          headerLeftContainerStyle: {paddingLeft: 20},
        }}>
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="NewToDo" component={NewToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
