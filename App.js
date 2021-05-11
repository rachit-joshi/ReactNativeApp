import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import tasksScreen from './components/tasks.js';
import infoScreen from './components/info.js';
import alertScreen from './components/alerts.js';

export default function App() {
  return (
      <AppContainer />
  );
}

const AppNavigator = createBottomTabNavigator({
  Tasks: {
    screen: tasksScreen
  },
  Info: {
    screen: infoScreen
  }
,
Alerts: {
    screen: alertScreen
}},{
    initialRouteName: "Tasks"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
