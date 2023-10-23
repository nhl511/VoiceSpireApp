import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import tw from "twrnc";
import AppStack from "./AppStack";
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
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
