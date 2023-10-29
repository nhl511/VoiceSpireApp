import React from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import { Pressable } from "react-native";

const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Pressable onPress={() => navigation.navigate("tpfb")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
