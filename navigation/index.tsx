

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import { ColorSchemeName } from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';

import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './PrincipalTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    //optiuni navigator
    <Stack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'center',
      headerTitleStyle:{
        fontWeight:'bold',
      }

     }}>
      <Stack.Screen name="Root" 
      component={BottomTabNavigator} 
      options={{
        title: "Aplicatie Chat",
        headerRight: () => (//directia si culoarea la butoane 
          <View style={{flexDirection: 'row' , width: 60, justifyContent:'space-between',marginRight: 10,}}>
           <Feather name="search" size={21} color={'white'} />
           <AntDesign name="setting" size={21} color={'white'} />
          </View>

        )
      }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
