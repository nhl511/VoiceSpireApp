import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { getOfficialVoices } from "../api/axios";
import { useState } from "react";
import ProjectDetailForSellerCard from "../components/ProjectDetailForSellerCard";

const ProjectDetailForSeller = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState([]);
  const { item } = route.params;
  const [error, setError] = useState(false);
  useEffect(() => {
    getOfficialVoices(item.voiceProject.voiceProjectId)
      .then((voiceData) => {
        setVoices(voiceData);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          setError(true);
        }
        // Always set loading to false in case of an error
        setLoading(false);
      });
  });
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Pressable onPress={() => navigation.navigate("tpfs")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
      </View>
      <ScrollView>
        <View style={tw`px-8 pt-5 gap-2`}>
          <Text style={tw`text-2xl mb-4`}>{item.voiceProject.title}</Text>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Mô tả</Text>
            <Text style={tw`flex-1 text-base`}>
              {item.voiceProject.description}
            </Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Yêu cầu chi tiết</Text>
            <Text style={tw`flex-1 text-base`}>
              {item.voiceProject.request}
            </Text>
          </View>
          <View>
            <View style={tw`flex-row`}>
              <Text style={tw`flex-1 text-base`}>Văn bản Demo</Text>
              <View style={tw`flex-1`}>
                <View style={tw`rounded-3xl flex-row items-center`}>
                  <MaterialIcons name="file-download" size={24} color="black" />
                  <Text style={tw`text-sm text-right`}>Tải xuống </Text>
                </View>
              </View>
            </View>
            <Text style={tw`text-xs text-right`}>
              (Xài Expo nên Ko hoạt động)
            </Text>
          </View>

          <View>
            <View style={tw`flex-row`}>
              <Text style={tw`flex-1 text-base`}>Văn bản chính thức</Text>
              <View style={tw`flex-1`}>
                <View style={tw`rounded-3xl flex-row items-center`}>
                  <MaterialIcons name="file-download" size={24} color="black" />
                  <Text style={tw`text-sm text-right`}>Tải xuống </Text>
                </View>
              </View>
            </View>
            <Text style={tw`text-xs text-right`}>
              (Xài Expo nên Ko hoạt động)
            </Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Số lần chỉnh sửa tối đa</Text>
            <Text style={tw`flex-1 text-base`}>
              {item.voiceProject.numberOfEdit} lần
            </Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Giá</Text>
            <Text style={tw`flex-1 text-base`}>
              {item.voiceProject.price} VNĐ/ phút
            </Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Thời lượng yêu cầu</Text>
            <Text style={tw`flex-1 text-base`}>
              {item.voiceProject.duration} phút
            </Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Tổng giá</Text>
            <Text style={tw`flex-1 text-base`}>
              {item.voiceProject.toalOutputPrice} VNĐ
            </Text>
          </View>
          {item.voiceProject.projectStatus === "Processing" && (
            <View style={tw`mt-5`}>
              <Pressable
                onPress={() =>
                  navigation.navigate("processing", {
                    item,
                  })
                }
              >
                <View style={tw`bg-[#ffd600] rounded-2xl w-50 px-4 py-1`}>
                  <View style={tw`flex-row justify-center items-center gap-2`}>
                    <Text style={tw`text-center text-base font-bold`}>
                      Nộp bản ghi âm
                    </Text>
                    <Feather name="arrow-right" size={24} color="black" />
                  </View>
                </View>
              </Pressable>
            </View>
          )}
          <View style={tw`mt-4`}>
            <Text style={tw`text-center font-bold text-lg`}>
              BẢN CHÍNH THỨC
            </Text>
          </View>
        </View>
        {loading ? (
          <View style={tw`flex-1 justify-center items-center`}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={tw`px-4 mt-10 mb-5`}>
            {error ? (
              <Text style={tw`text-center`}>
                Dự án này chưa có voice chính thức
              </Text>
            ) : (
              <FlatList
                data={voices}
                renderItem={({ item }) => {
                  return <ProjectDetailForSellerCard voice={item} />;
                }}
                ItemSeparatorComponent={<View style={tw`h-4`} />}
                ListEmptyComponent={
                  <Text style={tw`text-center`}>
                    Dự án này chưa có voice chính thức
                  </Text>
                }
              />
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProjectDetailForSeller;
