import React from "react";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import RegisterMenu from "../screens/RegisterMenu";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterMenu" component={RegisterMenu} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
