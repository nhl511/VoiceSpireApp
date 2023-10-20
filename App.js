import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Navigation/AuthStack";

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppStack /> */}
    </NavigationContainer>
  );
}
