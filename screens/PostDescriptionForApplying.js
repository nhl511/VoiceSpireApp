import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { checkBankAccountForSeller } from "../api/axios";

const PostDescriptionForApplying = ({ navigation, route }) => {
  const { item } = route.params;
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleCheck = async (item) => {
    setLoading(true);
    await checkBankAccountForSeller(userInfo.voiceSeller.voiceSellerId).then(
      (result) => {
        result
          ? navigation.navigate("applying", { item })
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
            <Text style={tw`text-xl mb-10`}>{item.title}</Text>
            <View style={tw`gap-2`}>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Mô tả</Text>
                <Text style={tw`text-base flex-1`}>{item.description}</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Yêu cầu chi tiết</Text>
                <Text style={tw`text-base flex-1`}>{item.request}</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Giới tính giọng đọc</Text>
                <Text style={tw`text-base flex-1`}>{item.voiceGender}</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Vùng miền</Text>
                <Text style={tw`text-base flex-1`}>{item.voiceRegion}</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Tone giọng</Text>
                {item.voiceTone === 5 && (
                  <Text style={tw`text-base flex-1`}>Rất cao</Text>
                )}
                {item.voiceTone === 4 && (
                  <Text style={tw`text-base flex-1`}>Cao</Text>
                )}
                {item.voiceTone === 3 && (
                  <Text style={tw`text-base flex-1`}>Vừa</Text>
                )}
                {item.voiceTone === 2 && (
                  <Text style={tw`text-base flex-1`}>Thấp</Text>
                )}
                {item.voiceTone === 1 && (
                  <Text style={tw`text-base flex-1`}>Rất thấp</Text>
                )}
                {item.voiceTone === 0 && (
                  <Text style={tw`text-base flex-1`}>Không có</Text>
                )}
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Độ truyền cảm</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.voiceInspirational === 5 && (
                    <Text style={tw`text-base flex-1`}>Rát tốt</Text>
                  )}
                  {item.voiceInspirational === 4 && (
                    <Text style={tw`text-base flex-1`}>Tốt</Text>
                  )}
                  {item.voiceInspirational === 3 && (
                    <Text style={tw`text-base flex-1`}>Khá</Text>
                  )}
                  {item.voiceInspirational === 2 && (
                    <Text style={tw`text-base flex-1`}>Trung bình</Text>
                  )}
                  {item.voiceInspirational === 1 && (
                    <Text style={tw`text-base flex-1`}>Kém</Text>
                  )}
                  {item.voiceInspirational === 0 && (
                    <Text style={tw`text-base flex-1`}>Không có</Text>
                  )}
                </Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Tốc độ đọc</Text>
                {item.voiceSpeed === 3 && (
                  <Text style={tw`text-base flex-1`}>Nhanh</Text>
                )}
                {item.voiceSpeed === 2 && (
                  <Text style={tw`text-base flex-1`}>Vừa</Text>
                )}
                {item.voiceSpeed === 1 && (
                  <Text style={tw`text-base flex-1`}>Chậm</Text>
                )}
                {item.voiceSpeed === 0 && (
                  <Text style={tw`text-base flex-1`}>Không có</Text>
                )}
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Khả năng phát âm</Text>
                {item.voicePronouce === 5 && (
                  <Text style={tw`text-base flex-1`}>Rát tốt</Text>
                )}
                {item.voicePronouce === 4 && (
                  <Text style={tw`text-base flex-1`}>Tốt</Text>
                )}
                {item.voicePronouce === 3 && (
                  <Text style={tw`text-base flex-1`}>Khá</Text>
                )}
                {item.voicePronouce === 2 && (
                  <Text style={tw`text-base flex-1`}>Trung bình</Text>
                )}
                {item.voicePronouce === 1 && (
                  <Text style={tw`text-base flex-1`}>Kém</Text>
                )}
                {item.voicePronouce === 0 && (
                  <Text style={tw`text-base flex-1`}>Không có</Text>
                )}
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Thể hiện trọng âm</Text>
                {item.voiceStress === 5 && (
                  <Text style={tw`text-base flex-1`}>Rát tốt</Text>
                )}
                {item.voiceStress === 4 && (
                  <Text style={tw`text-base flex-1`}>Tốt</Text>
                )}
                {item.voiceStress === 3 && (
                  <Text style={tw`text-base flex-1`}>Khá</Text>
                )}
                {item.voiceStress === 2 && (
                  <Text style={tw`text-base flex-1`}>Trung bình</Text>
                )}
                {item.voiceStress === 1 && (
                  <Text style={tw`text-base flex-1`}>Kém</Text>
                )}
                {item.voiceStress === 0 && (
                  <spaText style={tw`text-base flex-1`} n>
                    Không có
                  </spaText>
                )}
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Tính chất</Text>
                <Text style={tw`text-base flex-1`}>{item.voiceProperty}</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Số lần chỉnh sửa</Text>
                <Text style={tw`text-base flex-1`}>{item.numberOfEdit}</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Giá</Text>
                <Text style={tw`text-base flex-1`}>{item.price} VNĐ/phút</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Thời lượng yêu cầu</Text>
                <Text style={tw`text-base flex-1`}>{item.duration} phút</Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Tổng giá</Text>
                <Text style={tw`text-base flex-1`}>
                  {item.toalOutputPrice} VNĐ
                </Text>
              </View>
              <View style={tw`flex-row gap-10 `}>
                <Text style={tw`text-base flex-1`}>Thời hạn hoàn tất</Text>
                <Text style={tw`text-base flex-1`}>
                  {moment(item.deadline).format("DD/MM/yyyy")}
                </Text>
              </View>
            </View>

            <View style={tw`flex-row justify-center mt-10 mb-10`}>
              <Pressable
                onPress={() => {
                  handleCheck(item);
                }}
              >
                <View style={tw`bg-[#ffd600] rounded-2xl w-50 p-2`}>
                  <View style={tw`flex-row justify-center items-center gap-5`}>
                    <Text style={tw`text-center text-xl font-bold`}>
                      Ứng tuyển
                    </Text>
                    <Feather name="arrow-right" size={24} color="black" />
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

export default PostDescriptionForApplying;
