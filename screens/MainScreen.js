import React, {useEffect, useCallback} from 'react';

import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function OpenDetailButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', {id: 1})}
    />
  );
}

// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <OpenDetailButton />
//     </View>
//   );
// }

// function HomeScreen() {
//   useEffect(() => {
//     console.log('mounted!');
//     return () => {
//       console.log('unmounted!');
//     };
//   }, []);
//   return (
//     <View>
//       <Text>Home</Text>
//       <OpenDetailButton />
//     </View>
//   );
// }

function HomeScreen() {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고있음!');
      return () => {
        console.log('다른 화면으로 넘어감!');
      };
    }, []),
  );
  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
}

function SearchScreen() {
  return <Text>Search</Text>;
}
function NotificationScreen() {
  return <Text>Notification</Text>;
}
function MessageScreen() {
  return <Text>Message</Text>;
}

function MainScreen() {
  return (
    <Tab.Navigator
      initalRouteName="Home"
      //   tabBarOptions={{activeTintColor: '#fdd835', showLabel: false}}
      // screenOptions={{
      //   tabBarIndicatorStyle: {
      //     backgroundColor: '#009688',
      //   },
      //   tabBarActiveTintColor: '#009688',
      // }}
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'grey',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: '4',
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
