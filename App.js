import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Navigation/AuthStack";
import AppStack from "./Navigation/AppStack";
import tw from "twrnc";

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}
