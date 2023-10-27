import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";
import Header from "../components/Header";
import TrackingProjectSellerCard from "../components/TrackingProjectSellerCard";
import { useEffect } from "react";
import { getAllJobsForTracking } from "../api/axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { Pressable } from "react-native";
import { ActivityIndicator } from "react-native";
const TrackingProjectsForSeller = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getAllJobsForTracking(1, 100, userInfo.voiceSeller.voiceSellerId).then(
      (jobsData) => {
        setJobs(jobsData);
        setLoading(false);
      }
    );
  });

  const handleRefresh = () => {
    setRefreshing(true);
    getAllJobsForTracking(1, 100, userInfo.voiceSeller.voiceSellerId);
    setRefreshing(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={tw`flex-1 px-4 gap-4 mt-10`}>
          <FlatList
            data={jobs}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    (item.voiceJobStatus === "Processing" ||
                      item.voiceJobStatus === "Done") &&
                      navigation.navigate("pdfs", { item });
                  }}
                >
                  <TrackingProjectSellerCard job={item} />
                </Pressable>
              );
            }}
            ItemSeparatorComponent={<View style={tw`h-4`} />}
            ListEmptyComponent={
              <Text style={tw`text-center`}>Chưa có dự án nào</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default TrackingProjectsForSeller;
