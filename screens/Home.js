import React, { useContext } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

import tw from "twrnc";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
const Home = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
      <View>
        {userInfo.role === "seller" ? (
          <Text>{userInfo.voiceSeller.fullname}</Text>
        ) : (
          <Text>{userInfo.buyer.fullname}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
