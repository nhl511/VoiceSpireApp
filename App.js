import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Navigation/AuthStack";
import AppStack from "./Navigation/AppStack";
import tw from "twrnc";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./Navigation/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
