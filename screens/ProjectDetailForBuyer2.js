import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import { getOfficialVoices } from "../api/axios";
import ProjectDetailForBuyerCard2 from "../components/ProjectDetailForBuyerCard2";

const ProjectDetailForBuyer2 = ({ navigation, route }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState([]);
  const [error, setError] = useState(false);
  const projectStatus = item.projectStatus;
  useEffect(() => {
    getOfficialVoices(item.voiceProjectId)
      .then((voicesData) => {
        setVoices(voicesData);
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
        <Pressable onPress={() => navigation.navigate("tpfb")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View style={tw`px-8 pt-5 gap-2`}>
          <Text style={tw`text-2xl mb-4`}>{item.title}</Text>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Mô tả</Text>
            <Text style={tw`flex-1 text-base`}>{item.description}</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Yêu cầu chi tiết</Text>
            <Text style={tw`flex-1 text-base`}>{item.request}</Text>
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
            <Text style={tw`flex-1 text-base`}>Giá</Text>
            <Text style={tw`flex-1 text-base`}>{item.price} VNĐ/ phút</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Thời lượng yêu cầu</Text>
            <Text style={tw`flex-1 text-base`}>{item.duration} phút</Text>
          </View>
          <View style={tw`flex-row`}>
            <Text style={tw`flex-1 text-base`}>Tổng giá</Text>
            <Text style={tw`flex-1 text-base`}>{item.toalOutputPrice} VNĐ</Text>
          </View>

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
                  return (
                    <ProjectDetailForBuyerCard2
                      voice={item}
                      projectStatus={projectStatus}
                      navigation={navigation}
                    />
                  );
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

export default ProjectDetailForBuyer2;
