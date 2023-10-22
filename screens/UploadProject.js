import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Header from "../components/Header";
import tw from "twrnc";

const UploadProject = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
    </SafeAreaView>
  );
};

export default UploadProject;