import React, { useContext, useState } from "react";
import { Pressable, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { applyToProject } from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Applying = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const { item } = route.params;
  const { userInfo } = useContext(AuthContext);
  const mp3File =
    "https://firebasestorage.googleapis.com/v0/b/voicespire-7162e.appspot.com/o/voices%2F20231014064304816.mp3?alt=media&token=db188105-f756-427a-b677-b6454780559c";
  const handleSubmit = async () => {
    setLoading(true);
    await applyToProject(
      item.voiceProjectId,
      userInfo.voiceSeller.voiceSellerId,
      mp3File
    );
    navigation.navigate("tpfs");
    setLoading(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-5`}>
      <View style={tw`px-8 pt-5`}>
        <Text style={tw`text-2xl mb-10`}>{item.title}</Text>
        <View style={tw`gap-5`}>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-lg`}>Mô tả</Text>
            <Text style={tw`flex-1 text-lg`}>{item.description}</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-lg`}>Yêu cầu chi tiết</Text>
            <Text style={tw`flex-1 text-lg`}>{item.request}</Text>
          </View>
          <View>
            <View style={tw`flex-row`}>
              <Text style={tw`flex-1 text-lg`}>Văn bản demo</Text>
              <View style={tw`flex-1`}>
                <View style={tw`rounded-3xl flex-row`}>
                  <MaterialIcons name="file-download" size={24} color="black" />
                  <Text>Tải xuống</Text>
                </View>
              </View>
            </View>
            <Text style={tw`text-right`}>(Xài Expo nên Ko hoạt động)</Text>
          </View>

          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-lg`}>Thời lượng yêu cầu</Text>
            <Text style={tw`flex-1 text-lg`}>{item.duration} phút</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-lg`}>Tổng giá</Text>
            <Text style={tw`flex-1 text-lg`}>{item.toalOutputPrice} VNĐ</Text>
          </View>
        </View>
        <View style={tw`flex-row justify-center mt-10`}>
          <View style={tw`flex-row items-center gap-2 border border-solid p-2`}>
            <MaterialIcons name="file-upload" size={24} color="black" />
            <Text style={tw`text-lg`}>Tải lên giọng đọc demo</Text>
          </View>
        </View>
        <Text style={tw`text-center mt-2`}>(Xài Expo nên Ko hoạt động)</Text>

        <View style={tw`flex-row justify-center mt-10 mb-10`}>
          <TouchableOpacity onPress={handleSubmit} disabled={loading}>
            <View
              style={
                loading
                  ? tw`bg-gray-300 rounded-2xl w-60 p-2`
                  : tw`bg-[#ffd600] rounded-2xl w-50 p-2`
              }
            >
              <View style={tw`flex-row justify-center items-center gap-5`}>
                <Text
                  style={
                    loading
                      ? tw`text-center text-lg font-bold text-gray-400`
                      : tw`text-center text-xl font-bold`
                  }
                >
                  {loading ? "Đang ứng tuyển" : "Ứng tuyển ngay"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Applying;
