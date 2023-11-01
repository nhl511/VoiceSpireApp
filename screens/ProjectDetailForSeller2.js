import moment from "moment";
import React, { useContext, useState } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import tw from "twrnc";
import {
  acceptVoiceProject,
  checkBankAccountForSeller,
  denyVoiceProject,
} from "../api/axios";
import { AuthContext } from "../context/AuthContext";
const ProjectDetailForSeller2 = ({ navigation, route }) => {
  const { item } = route.params;
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleCheck = async () => {
    setLoading(true);
    await checkBankAccountForSeller(userInfo.voiceSeller.voiceSellerId).then(
      (result) => {
        result
          ? acceptVoiceProject(item.voiceProject.voiceProjectId).then(
              navigation.navigate("tpfs")
            )
          : navigation.navigate("UpdateBank");
      }
    );
    setLoading(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-5`}>
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View style={tw` pt-5 px-8`}>
            <Text style={tw`text-xl mb-10`}>{item.voiceProject.title}</Text>
            <View style={tw`gap-2`}>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Mô tả</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.voiceProject.description}
                </Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Yêu cầu chi tiết</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.voiceProject.request}
                </Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Thời lượng yêu cầu</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.voiceProject.duration} phút
                </Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Số lần chỉnh sửa</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.voiceProject.numberOfEdit} lần
                </Text>
              </View>

              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Thời hạn hoàn tất</Text>
                <Text style={tw`text-base flex-1`}>
                  {moment(item.voiceProject.deadline).format("DD/MM/yyyy")}
                </Text>
              </View>

              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Tổng giá</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.voiceProject.toalOutputPrice} VNĐ
                </Text>
              </View>
            </View>

            <View style={tw`flex-row justify-center mt-10 mb-10 gap-4`}>
              <Pressable onPress={handleCheck}>
                <View style={tw`bg-[#ffd600] rounded-md px-10 py-2`}>
                  <View style={tw`flex-row justify-center items-center gap-5`}>
                    <Text style={tw`text-center text-lg font-bold`}>
                      Xác nhận
                    </Text>
                  </View>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  denyVoiceProject(item.voiceProject.voiceProjectId);
                  navigation.navigate("tpfs");
                }}
              >
                <View style={tw`bg-gray-300 rounded-md px-10 py-2`}>
                  <View style={tw`flex-row justify-center items-center gap-5`}>
                    <Text style={tw`text-center text-lg font-bold`}>
                      Từ chối
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProjectDetailForSeller2;
