import React from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const RegisterMenu = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-[#ffd600] justify-center items-center`}>
      <View style={tw`flex-row gap-5`}>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <View
            style={tw`w-40 h-40 bg-white flex justify-center items-center gap-5 p-4 rounded-3xl`}
          >
            <Entypo name="mic" size={50} color="black" />
            <Text style={tw`text-lg text-center`}>Tạo tài khoản giọng đọc</Text>
          </View>
        </Pressable>
        <Pressable>
          <View
            style={tw`w-40 h-40 bg-white flex justify-center items-center gap-5 p-4 rounded-3xl`}
          >
            <AntDesign name="notification" size={50} color="black" />
            <Text style={tw`text-lg text-center`}>
              Tạo tài khoản tuyển dụng
            </Text>
          </View>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <View style={tw`mt-20 flex-row items-center gap-2`}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={tw`text-xl`}>Trở lại</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default RegisterMenu;
