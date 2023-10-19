import React from "react";
import { Button, Image, Pressable } from "react-native";
import { Text, View } from "react-native";
import tw from "twrnc";
const OnBoardingScreen = ({ navigation }) => {
  return (
    <View
      style={tw`flex-1 justify-center items-center bg-[#ffd600] relative px-15`}
    >
      <Image
        source={require("../assets/logo.png")}
        style={tw`h-30 w-30 absolute top-50`}
        resizeMode="center"
      />
      <Text style={tw`text-3xl text-center font-bold`}>
        Chào mừng đến với Voice Spire!
      </Text>
      <View style={tw`absolute bottom-20 left-10 right-10`}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <View style={tw`bg-white rounded-3xl`}>
            <Text style={tw`text-center text-2xl font-bold py-2`}>Bắt đầu</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
