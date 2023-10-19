import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import tw from "twrnc";
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="black" />
        </Pressable>
        <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
