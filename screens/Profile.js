import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default Profile;
