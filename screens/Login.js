import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import tw from "twrnc";
const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={tw`flex-1 justify-center items-center px-8 bg-[#ffd600]`}
    >
      <Image
        source={require("../assets/logo.png")}
        style={tw`h-30 w-30`}
        resizeMode="center"
      />
      <TextInput
        placeholder="Email"
        style={tw` w-full px-4 py-2 text-xl rounded-md bg-white mb-5 mt-10`}
      />
      <TextInput
        placeholder="Mật khẩu"
        style={tw` w-full px-4 py-2 text-xl rounded-md bg-white`}
        secureTextEntry
      />
      <View style={tw`bg-white mt-10 rounded-3xl mb-10 `}>
        <Text style={tw`text-xl font-bold px-10 py-2`}>Đăng nhập</Text>
      </View>
      <View style={tw`mt-5 items-center gap-2`}>
        <Text>Bạn chưa có tài khoản VoiceSpire?</Text>
        <Text>
          <Pressable onPress={() => navigation.navigate("RegisterMenu")}>
            <Text style={tw`font-bold`}>Đăng ký</Text>
          </Pressable>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
