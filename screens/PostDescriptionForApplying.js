import React from "react";
import { SafeAreaView, View } from "react-native";
import Header from "../components/Header";
import tw from "twrnc";
import Header2 from "../components/Header2";
const PostDescriptionForApplying = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header2 navigation={navigation} />
    </SafeAreaView>
  );
};

export default PostDescriptionForApplying;
