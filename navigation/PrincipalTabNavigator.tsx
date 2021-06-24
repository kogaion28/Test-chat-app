

import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import{ createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { PrincipalTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const PrincipalTab = createMaterialTopTabNavigator<PrincipalTabParamList>();


export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <PrincipalTab.Navigator
      initialRouteName="Chat"
      //modificare culoare taburile de sus
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
        
        style:{ backgroundColor: Colors[colorScheme].tint,},
        indicatorStyle: {backgroundColor:Colors[colorScheme].background, height: 6,},
        labelStyle: { fontWeight: 'bold'},

        showIcon:true,
      
      }}>
      
      <PrincipalTab.Screen 
      // taburi camera ,chat ,status ,telefone
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="photo-camera" size={21} color="black" />,
        }}
      />
      <PrincipalTab.Screen
        name="Chat"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chat" size={21} color="black" />,
        }}
      />
      <PrincipalTab.Screen
        name="Status"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="meho" size={21} color="black" />,
        }}
      />
      <PrincipalTab.Screen
        name="Telefone"
        component={TabOneNavigator}
        options={{//iconite
          tabBarIcon: ({ color }) => <Entypo name="phone" size={21} color="black" />,
        }}
      />
    </PrincipalTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
