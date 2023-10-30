import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { AuthContext } from "../context/AuthContext";
import { getSellerProfile, updateSellerProfile } from "../api/axios";

const Profile = ({ navigation }) => {
  const genderList = ["Nam", "Nữ", "Khác"];
  const { userInfo } = useContext(AuthContext);
  const [name, setName] = useState();
  const [birthday, setBirthday] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [gender, setGender] = useState();
  const [bankNumber, setBankNumber] = useState();
  const [bankName, setBankName] = useState();
  const [bankAccountName, setBankAccountName] = useState();
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    getSellerProfile(userInfo.voiceSeller.voiceSellerId).then((userData) => {
      setName(userData.fullname);
      setBirthday(userData.birthDay);
      setPhoneNum(userData.phone);
      setGender(userData.gender);
      setBankNumber(userData.bankNumber);
      setBankName(userData.bankName);
      setBankAccountName(userData.bankAccountName);
      setAddress(userData.address);
      setLoading(false);
    });
  }, []);
  const handleUpdate = async () => {
    setLoading2(true);
    await updateSellerProfile(
      userInfo.voiceSeller.voiceSellerId,
      name,
      phoneNum,
      userInfo.voiceSeller.email,
      userInfo.voiceSeller.password,
      birthday,
      userInfo.voiceSeller.introduce,
      address,
      gender,
      userInfo.voiceSeller.avatar,
      userInfo.voiceSeller.rateAvg,
      bankName,
      bankNumber,
      bankAccountName,
      userInfo.voiceSeller.googleId,
      userInfo.voiceSeller.status
    );

    navigation.goBack();
    setLoading2(false);
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={tw`flex-1 bg-white justify-center`}
    >
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={tw`px-8 gap-8`}>
          <View style={tw`gap-4`}>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Tên</Text>
              <TextInput
                placeholder="Nhập tên"
                style={tw`border px-4 py-2 w-40 flex-2`}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Ngày sinh</Text>
              <TextInput
                placeholder="YYYY-MM-DD"
                style={tw`border py-2 px-4 flex-2`}
                value={birthday}
                onChangeText={setBirthday}
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Số điện thoại</Text>
              <TextInput
                placeholder="Nhập số điện thoại"
                style={tw`border py-2 px-4 flex-2`}
                value={phoneNum}
                onChangeText={setPhoneNum}
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Giới tính</Text>
              <SelectList
                boxStyles={{
                  width: 240,
                  backgroundColor: "white",
                  marginTop: 5,
                }}
                setSelected={(value) => setGender(value)}
                data={genderList}
                defaultOption={
                  gender === "Nam"
                    ? {
                        key: "Nam",
                        value: "Nam",
                      }
                    : gender === "Nữ"
                    ? {
                        key: "Nữ",
                        value: "Nữ",
                      }
                    : gender === "Khác"
                    ? {
                        key: "Khác",
                        value: "Khác",
                      }
                    : null
                }
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Số tài khoản</Text>
              <TextInput
                placeholder="Nhập số tài khoản"
                style={tw`border py-2 px-4 flex-2`}
                value={bankNumber}
                onChangeText={setBankNumber}
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Ngân hàng</Text>
              <TextInput
                placeholder="Nhập ngân hàng"
                style={tw`border py-2 px-4 flex-2`}
                value={bankName}
                onChangeText={setBankName}
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Tên tài khoản</Text>
              <TextInput
                placeholder="Nhập tên tài khoản"
                style={tw`border py-2 px-4 flex-2`}
                value={bankAccountName}
                onChangeText={setBankAccountName}
              />
            </View>
            <View style={tw`flex-row gap-2 items-center`}>
              <Text style={tw`flex-1`}>Địa chỉ</Text>
              <TextInput
                placeholder="Nhập địa chỉ"
                style={tw`border py-2 px-4 flex-2`}
                value={address}
                onChangeText={setAddress}
              />
            </View>
          </View>
          <View style={tw`flex-row justify-center mt-5`}>
            <TouchableOpacity onPress={handleUpdate} disabled={loading2}>
              <View
                style={
                  loading2
                    ? tw`bg-[#ecf0f1] py-2 px-8 rounded-3xl`
                    : tw`bg-[#ffd600] py-2 px-8 rounded-3xl`
                }
              >
                <Text
                  style={
                    loading2
                      ? tw`text-[#bdc3c7] font-bold text-lg`
                      : tw`font-bold text-lg`
                  }
                >
                  {loading2 ? "Đang cập nhật" : "Cập nhật"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default Profile;
