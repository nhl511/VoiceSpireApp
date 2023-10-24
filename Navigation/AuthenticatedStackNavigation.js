import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import DrawerNavigation from "./DrawerNavigation";
import PostDescriptionForApplying from "../screens/PostDescriptionForApplying";
import Applying from "../screens/Applying";
import ProjectDetailForSeller from "../screens/ProjectDetailForSeller";
import Processing from "../screens/Processing";

const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="pdfa" component={PostDescriptionForApplying} />
      <Stack.Screen name="applying" component={Applying} />
      <Stack.Screen name="pdfs" component={ProjectDetailForSeller} />
      <Stack.Screen name="processing" component={Processing} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStackNavigation;
