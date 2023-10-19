import React from "react";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import OnBoardingScreen from "../screens/OnBoardingScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
