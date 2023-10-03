import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from '../../Screens/Settings/index';
import HomeScreen from '../../Screens/Home/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
