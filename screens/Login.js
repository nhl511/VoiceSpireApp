import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const emailRef = useRef();
  const errRef = useRef();
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  // useEffect(() => {
  //   if (auth.role) {
  //     if (auth.role[0] === "seller") navigation.navigate("Home");
  //     // else if (auth.role[0] === "buyer") navigate("/voices");
  //     // else if (auth.role[0] === "manager") navigate("/lv");
  //   } else navigation.navigate("Login");
  // }, []);

  const handleLogin = () => {
    setLoadingLogin(true);
    login(email, password);
    // login(email, password)
    //   .then((json) => {
    //     const token = json.token;
    //     const roleStr = json.role;
    //     let userId = null;
    //     if (roleStr === "seller") {
    //       userId = json.voiceSeller.voiceSellerId;
    //     } else if (roleStr === "buyer") {
    //       userId = json.buyer.buyerId;
    //     }
    //     const role = roleStr.split(" ");
    //     // setAuth({ userId, email, password, role, token });
    //     checkBankAccount(userId, roleStr);

    //     setLoadingLogin(false);
    //     setEmail("");
    //     setPassWord("");
    //   })
    //   .catch((error) => {
    //     if (error.response.status === 500) {
    //       setErrorMessage("No server response");
    //     } else if (error.response.status === 400) {
    //       setErrorMessage("Missing Username or Password");
    //     } else if (error.response.status === 401) {
    //       setErrorMessage("Sai Email hoặc mật khaẩu");
    //     } else {
    //       setErrorMessage("Login Failed");
    //     }
    //     errRef.current.focus();
    //     setLoadingLogin(false);
    //   });
  };

  const checkBankAccount = (userId, role) => {
    if (role === "seller") {
      navigation.navigate("Home");
    }
  };

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
          {errorMessage}
        </Text>
      </View>

      <Pressable onPress={handleLogin} disabled={loadingLogin}>
        <View
          style={
            loadingLogin
              ? tw`bg-[#ecf0f1] mt-10 rounded-3xl mb-10 w-50 py-4`
              : tw`bg-white mt-10 rounded-3xl mb-10 w-50 py-4`
          }
        >
          <Text
            style={
              loadingLogin
                ? tw`text-[#bdc3c7] text-xl font-bold text-center`
                : tw`text-xl font-bold text-center`
            }
          >
            {loadingLogin ? "Đang đăng nhập" : "Đăng nhập"}
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
