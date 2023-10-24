import React from "react";
import { Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const ProjectDetailForBuyer = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Pressable onPress={() => navigation.navigate("tpfb")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProjectDetailForBuyer;
