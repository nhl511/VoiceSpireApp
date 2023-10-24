import React from "react";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import RegisterMenu from "../screens/RegisterMenu";
import Register from "../screens/Register";
import RegisterBuyer from "../screens/RegisterBuyer";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterMenu" component={RegisterMenu} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterBuyer" component={RegisterBuyer} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
