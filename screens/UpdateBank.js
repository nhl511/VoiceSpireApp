import React, { useContext, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import {
  updateBankAccountForBuyer,
  updateBankAccountForSeller,
} from "../api/axios";
import { AuthContext } from "../context/AuthContext";
const UpdateBank = ({ navigation }) => {
  const [bankName, setBankName] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleUpdateBank = () => {
    setLoading(true);
    {
      userInfo.role === "seller"
        ? updateBankAccountForSeller(
            userInfo.voiceSeller.voiceSellerId,
            bankNumber,
            bankName,
            bankAccountName
          ).then(navigation.goBack())
        : userInfo.role === "buyer"
        ? updateBankAccountForBuyer(
            userInfo.buyer.buyerId,
            bankNumber,
            bankName,
            bankAccountName
          ).then(navigation.goBack())
        : null;
    }
    setLoading(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white justify-center`}>
      <View style={tw`gap-5 px-10`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`flex-1 text-base`}>Ngân hàng</Text>
          <TextInput
            value={bankName}
            onChangeText={setBankName}
            style={tw`border flex-2 py-2 px-4`}
            placeholder="Nhập tên ngân hàng"
          />
        </View>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`flex-1 text-base`}>Số tài khoản</Text>
          <TextInput
            value={bankNumber}
            onChangeText={setBankNumber}
            style={tw`border flex-2 py-2 px-4`}
            placeholder="Nhập số tài khoản"
          />
        </View>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`flex-1 text-base`}>Tên chủ tài khoản</Text>
          <TextInput
            value={bankAccountName}
            onChangeText={setBankAccountName}
            style={tw`border flex-2 py-2 px-4`}
            placeholder="Nhập tên chủ tài khoản"
          />
        </View>
        <View style={tw`flex-row justify-center mt-5`}>
          <TouchableOpacity
            onPress={() => handleUpdateBank()}
            disabled={loading}
          >
            <View
              style={
                loading
                  ? tw`bg-[#ecf0f1] w-full py-2 px-8 rounded-3xl`
                  : tw`bg-[#ffd600] w-full py-2 px-8 rounded-3xl`
              }
            >
              <Text
                style={
                  loading
                    ? tw`text-[#bdc3c7] font-bold text-center text-lg`
                    : tw`font-bold text-center text-lg`
                }
              >
                {loading ? "Đang cập nhật" : "Xác nhận"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateBank;
