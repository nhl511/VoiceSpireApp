import "react-native-gesture-handler";

import { AuthProvider } from "./context/AuthContext";
import AppNav from "./Navigation/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
