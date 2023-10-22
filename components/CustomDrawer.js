import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import tw from "twrnc";
import { AuthContext } from "../context/AuthContext";

const CustomDrawer = (props) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={tw`flex-1`}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#ffd600" }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={tw`h-20 w-20 mb-3 ml-4`}
        />
        <View style={tw`flex-1 bg-white pt-2`}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={tw`p-5 border-t border-t-[#ccc]`}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={tw`py-4`}
        >
          <View style={tw`flex-row items-center gap-2`}>
            <FontAwesome name="sign-out" size={24} color="#e74c3c" />
            <Text style={tw`text-base text-[#e74c3c]`}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
