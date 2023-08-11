import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./src/screens/Login";
import Register from './src/screens/Register';
import RegisterO from './src/screens/RegOwner';
import Home from './src/screens/Home'
import Reg from './src/screens/Reg'
import Details from './src/screens/Desc';
import Photos from './src/screens/Photos';
import Availabe from './src/screens/Available';
import Booking from './src/screens/Booking';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/screens/Start';
import BottomNav from './src/screens/BottomNav';
import Userdetails from './src/screens/Userdetails';
import Search from './src/screens/Search';
import Ownerpage from './src/screens/Ownerpage';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen name="start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="prereg" component={Reg} options={{ headerShown: false }} />
        <Stack.Screen name="avail" component={Availabe} options={{ headerShown: false }} />
        <Stack.Screen name="photos" component={Photos} options={{ headerShown: false }} />
        <Stack.Screen name="owner" component={RegisterO} options={{ headerShown: false }} />
        <Stack.Screen name="booking" component={Booking} options={{ headerShown: false }} />
        <Stack.Screen name="nav" component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name="userdetails" component={Userdetails} options={{ headerShown: false }} />
        <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="ownerh" component={Ownerpage} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;