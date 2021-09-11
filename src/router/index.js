import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Splash,
  ListProduct,
  Profile,
  ProductDetail,
  Keranjang,
  ChectOut,
  EditProfile,
  ChangePassword,
  History,
  Login,
  Register1,
  Register2,
  PBB,
  Pembayaran,
  BayarTagihan,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNav} from '../components';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      {/* <Tab.Screen
        name="ListProduct"
        component={ListProduct}
        options={{title: 'Product', headerShown: false}}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="ListProduct"
        component={ListProduct}
        options={{title: 'PBB'}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Keranjang" component={Keranjang} />
      <Stack.Screen name="CheckOut" component={ChectOut} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'Change Password'}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{title: 'History Pemesanan'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register1"
        component={Register1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PBB" component={PBB} />
      <Stack.Screen name="BayarTagihan" component={BayarTagihan} />
      <Stack.Screen name="Pembayaran" component={Pembayaran} />
    </Stack.Navigator>
  );
};

export default Router;
