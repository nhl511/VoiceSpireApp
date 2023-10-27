import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  return (
    <View style={tw`flex-row justify-between items-center px-4`}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={24} color="black" />
      </Pressable>
      {userInfo.role === "seller" ? (
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <View style={tw`flex-row gap-2 items-center`}>
            <Ionicons name="person-outline" size={24} color="black" />
            <View style={tw`flex-row items-center gap-1`}>
              <Text style={tw`font-bold text-lg`}>
                {userInfo.voiceSeller.fullname}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={tw`flex-row gap-2 items-center`}>
          <Ionicons name="person-outline" size={24} color="black" />
          <View style={tw`flex-row items-center gap-1`}>
            <Text style={tw`font-bold text-lg`}>{userInfo.buyer.fullname}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
