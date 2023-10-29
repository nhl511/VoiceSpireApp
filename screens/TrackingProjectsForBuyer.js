import React, { useContext } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import tw from "twrnc";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProjectsForTracking } from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import TrackingProjectBuyerCard from "../components/TrackingProjectBuyerCard";
import { Pressable } from "react-native";

const TrackingProjectsForBuyer = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getAllProjectsForTracking(userInfo.buyer.buyerId).then((userData) => {
      setPosts(userData);
      setLoading(false);
    });
  });

  const handleRefresh = () => {
    setRefreshing(true);
    getAllProjectsForTracking(userInfo.buyer.buyerId);
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
            data={posts}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    item.projectStatus === "WaitApprove" &&
                      navigation.navigate("payment", { item });
                    item.projectStatus === "Apply" &&
                      navigation.navigate("pdfb", { item });
                    (item.projectStatus === "Processing" ||
                      item.projectStatus === "Done") &&
                      navigation.navigate("pdfb2", { item });
                  }}
                >
                  <TrackingProjectBuyerCard post={item} />
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

export default TrackingProjectsForBuyer;
