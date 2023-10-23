import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import DrawerNavigation from "./DrawerNavigation";
import PostDescriptionForApplying from "../screens/PostDescriptionForApplying";

const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="pdfa" component={PostDescriptionForApplying} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStackNavigation;
