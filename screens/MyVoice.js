import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import Header from "../components/Header";

const MyVoice = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyVoice;
