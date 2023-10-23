import React from "react";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { Pressable, Text, View } from "react-native";
const Header2 = ({ navigation }) => {
  return (
    <View style={tw`flex-row justify-between px-4`}>
      <Pressable onPress={() => navigation.navigate("Posts")}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </Pressable>
      <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
    </View>
  );
};

export default Header2;
