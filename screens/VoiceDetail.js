import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import { getVoice, sendVoiceProject } from "../api/axios";
import { TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";

const VoiceDetail = ({ route, navigation }) => {
  const { selectedVoicedSellerId } = route.params;
  const [voice, setVoice] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [request, setRequest] = useState();
  const [deadline, setDeadline] = useState();
  const [duration, setDuration] = useState();
  const { userInfo } = useContext(AuthContext);
  const [loading2, setLoading2] = useState(false);
  const demoFile = "";
  const mainFile =
    "https://firebasestorage.googleapis.com/v0/b/voicespire-7162e.appspot.com/o/docs%2F20231030032255353.docx?alt=media&token=40bfcda3-dc6f-4dd3-9bfb-72e5c2e253ea";
  const thumbnail = "";
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Gửi dự án đến " + name,
    });
  });

  useEffect(() => {
    getVoice(selectedVoicedSellerId).then((voiceData) => {
      setName(voiceData.voiceSeller.fullname);
      setVoice(voiceData);
      setLoading(false);
    });
  }, []);
  const handleSubmit = async () => {
    setLoading2(true);
    await sendVoiceProject(
      userInfo.buyer.buyerId,
      selectedVoicedSellerId,
      title,
      description,
      duration,
      deadline,
      demoFile,
      mainFile,
      thumbnail,
      request
    );

    navigation.navigate("tpfb");
    setLoading2(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white `}>
      {loading || loading2 ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={tw`flex-1 px-4 mt-5 gap-4 relative`}>
          <View style={tw`flex-row`}>
            <View
              style={
                voice.voiceGender === "Nam"
                  ? tw`bg-blue-100 py-2 px-4`
                  : tw`bg-pink-200 py-2 px-4`
              }
            >
              <Text
                style={
                  voice.voiceGender === "Nam"
                    ? tw`text-blue-600 `
                    : tw`text-pink-600`
                }
              >
                Giọng {voice.voiceGender}
              </Text>
            </View>
          </View>
          <View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-lg`}>{voice.voiceSeller.fullname}</Text>
              <View>
                <Text style={tw`font-bold text-lg`}>{voice.price}</Text>
                <Text style={tw`text-xs`}>VNĐ / phút</Text>
              </View>
            </View>
          </View>
          <View style={tw`gap-4`}>
            <View style={tw`gap-2`}>
              <Text>Tiêu đề</Text>
              <TextInput
                placeholder="Nhập tiêu đề"
                style={tw`border border-gray-400 py-2 px-4 text-base`}
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>Mô tả</Text>
              <TextInput
                placeholder="Nhập mô tả"
                style={tw`border border-gray-400 py-2 px-4`}
                value={description}
                onChangeText={setDescription}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>Yêu cầu chi tiết</Text>
              <TextInput
                placeholder="Nhập yêu cầu chi tiết"
                style={tw`border border-gray-400 py-2 px-4 text-base`}
                value={request}
                onChangeText={setRequest}
              />
            </View>

            <View style={tw`gap-2`}>
              <Text>Nhập hạn Deadline</Text>
              <TextInput
                placeholder="YYYY-MM-DD"
                style={tw`border border-gray-400 py-2 px-4 text-base`}
                value={deadline}
                onChangeText={setDeadline}
              />
            </View>
            <View style={tw`gap-2`}>
              <Text>Thời lượng yêu cầu</Text>
              <TextInput
                value={duration}
                onChangeText={setDuration}
                placeholder="Nhập thời lượng yêu càu (phút)"
                style={tw`border border-gray-400 py-2 px-4 text-base`}
              />
            </View>
            <View style={tw`flex-row`}>
              <View style={tw`border py-2 px-4 flex-row items-center gap-2`}>
                <MaterialIcons name="file-upload" size={24} color="black" />
                <Text>Tải lên văn bản cần đọc</Text>
              </View>
            </View>
          </View>
          {duration && (
            <View style={tw`absolute bottom-0 left-0 right-0 px-6`}>
              <View style={tw`flex-row justify-between mb-2`}>
                <Text style={tw`text-base`}>Tổng cộng</Text>
                <View style={tw`flex-row gap-2 items-center`}>
                  <Text style={tw`font-bold text-lg`}>
                    {voice.price * duration}
                  </Text>
                  <Text style={tw`text-xs`}>VNĐ</Text>
                </View>
              </View>
              <TouchableOpacity onPress={handleSubmit} disabled={loading2}>
                <View
                  style={
                    loading2 ? tw`bg-gray-300 py-2` : tw`bg-yellow-400 py-2`
                  }
                >
                  <Text
                    style={
                      loading2
                        ? tw`text-lg font-bold text-center text-gray-400`
                        : tw`text-center text-lg font-bold`
                    }
                  >
                    {loading2 ? "Đang gửi dự án" : "Gửi dự án"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default VoiceDetail;
