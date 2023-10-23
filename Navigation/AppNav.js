import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import StackNavigation from "./StackNavigation";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import tw from "twrnc";
import DrawerNavigation from "./DrawerNavigation";
import AuthenticatedStackNavigation from "./AuthenticatedStackNavigation";
const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {userToken ? <AuthenticatedStackNavigation /> : <StackNavigation />}
    </NavigationContainer>
  );
};

export default AppNav;
