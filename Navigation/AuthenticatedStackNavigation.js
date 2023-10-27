import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import DrawerNavigation from "./DrawerNavigation";
import PostDescriptionForApplying from "../screens/PostDescriptionForApplying";
import Applying from "../screens/Applying";
import ProjectDetailForSeller from "../screens/ProjectDetailForSeller";
import Processing from "../screens/Processing";
import ProjectDetailForBuyer from "../screens/ProjectDetailForBuyer";
import ProjectDetailForBuyer2 from "../screens/ProjectDetailForBuyer2";
import Profile from "../screens/Profile";
const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="pdfa" component={PostDescriptionForApplying} />
      <Stack.Screen name="applying" component={Applying} />
      <Stack.Screen name="processing" component={Processing} />
      <Stack.Screen name="pdfs" component={ProjectDetailForSeller} />
      <Stack.Screen name="pdfb" component={ProjectDetailForBuyer} />
      <Stack.Screen name="pdfb2" component={ProjectDetailForBuyer2} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStackNavigation;
