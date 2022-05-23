/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
// import HeaderlessScreen from './screens/HeaderlessScreen';
import MainScreen from './screens/MainScreen';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// 1. 네이티브 스택 네이게이터
// const Stack = createNativeStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '홈',
//             headerStyle: {
//               backgroundColor: '#fdd835',
//             },
//             headerTintColor: '#ffffff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//               fontSize: 20,
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailScreen}
//           options={{
//             headerLeft: ({onPress}) => (
//               <TouchableOpacity onPress={onPress}>
//                 <Text>Left</Text>
//               </TouchableOpacity>
//             ),
//             headerRight: ({onPress}) => (
//               <TouchableOpacity onPress={onPress}>
//                 <Text>Right</Text>
//               </TouchableOpacity>
//             ),
//             headerTitle: ({children}) => (
//               <View>
//                 <Text>{children}</Text>
//               </View>
//             ),
//             headerBackVisible: false, //안드로이드에서는 default로 좌측에 화살표가 나타남, 이 버튼을 없애기 위한 옵션설정
//           }}
//         />
//         <Stack.Screen
//           name="Headerless"
//           component={HeaderlessScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//2.드로어 네비게이터
// const Drawer = createDrawerNavigator();
// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
//       <Button
//         title="Setting 열기"
//         onPress={() => navigation.navigate('Setting')}
//       />
//     </View>
//   );
// }

// function SettingScreen({navigation}) {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Home"
//         drawerPosition="right"
//         backBehavior="history"
//         screenOptions={{
//           drawerActiveBackgoundColor: 'red',
//           drawerActiveTintColor: 'orange',
//           headerShown: false,
//         }}
//         drawerContent={({navigation}) => (
//           <SafeAreaView>
//             <Text>A Custom Drawer</Text>
//             <Button
//               onPress={() => navigation.closeDrawer()}
//               title="Drawer 닫기"
//             />
//           </SafeAreaView>
//         )}>
//         <Drawer.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
//         />
//         <Drawer.Screen
//           name="Setting"
//           component={SettingScreen}
//           options={{title: '설정'}}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

//3.하단 탭 네비게이터
// const Tab = createBottomTabNavigator();
// function HomeScreen() {
//   return <Text>Home</Text>;
// }
// function SearchScreen() {
//   return <Text>Search</Text>;
// }
// function NotificationScreen() {
//   return <Text>Notification</Text>;
// }
// function MessageScreen() {
//   return <Text>Message</Text>;
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initalRouteName="Home"
//         tabBarOptions={{activeTintColor: '#fdd835', showLabel: false}}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             title: '홈',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             title: '검색',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="search" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Notification"
//           component={NotificationScreen}
//           options={{
//             title: '알림',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="notifications" color={color} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Message"
//           component={MessageScreen}
//           options={{
//             title: '메시지',
//             tabBarIcon: ({color, size}) => (
//               <Icon name="message" color={color} size={size} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

//4.네이티브 스택 네이게이터 + 하단 탭 네비게이터 사용 (MainScreen.js 이용)
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//5. 머티리얼 상단 탭 네비게이터

export default App;
