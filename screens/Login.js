import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  const errRef = useRef();
  const navigation = useNavigation();
  const { login, loginErrorMessage, setLoginErrorMessage, isLoadingButton } =
    useContext(AuthContext);
  useEffect(() => {
    setLoginErrorMessage("");
  }, [email, password]);

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <KeyboardAvoidingView
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
        value={email}
        onChangeText={setEmail}
        ref={emailRef}
      />
      <TextInput
        placeholder="Mật khẩu"
        style={tw` w-full px-4 py-2 text-xl rounded-md bg-white`}
        secureTextEntry
        value={password}
        onChangeText={setPassWord}
      />
      <View style={tw`mt-2`}>
        <Text style={tw`text-left text-red-600`} ref={errRef}>
          {loginErrorMessage}
        </Text>
      </View>

      <Pressable onPress={handleLogin} disabled={isLoadingButton}>
        <View
          style={
            isLoadingButton
              ? tw`bg-[#ecf0f1] mt-10 rounded-3xl mb-10 w-50 py-4`
              : tw`bg-white mt-10 rounded-3xl mb-10 w-50 py-4`
          }
        >
          <Text
            style={
              isLoadingButton
                ? tw`text-[#bdc3c7] text-xl font-bold text-center`
                : tw`text-xl font-bold text-center`
            }
          >
            {isLoadingButton ? "Đang đăng nhập" : "Đăng nhập"}
          </Text>
        </View>
      </Pressable>

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
