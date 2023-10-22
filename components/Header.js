import React from "react";
import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";
const Header = ({ navigation }) => {
  return (
    <View style={tw`flex-row justify-between px-4`}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={24} color="black" />
      </Pressable>
      <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
    </View>
  );
};

export default Header;
