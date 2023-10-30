import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { checkBankAccountForSeller, getPosts } from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Posts = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    getPosts(1, 100).then((postsData) => {
      setPosts(postsData);
      setLoading(false);
    });
  });
  const handleCheck = async (item) => {
    setLoading2(true);
    await checkBankAccountForSeller(userInfo.voiceSeller.voiceSellerId).then(
      (result) => {
        result
          ? navigation.navigate("pdfa", { item })
          : navigation.navigate("UpdateBank");
      }
    );
    setLoading2(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-5`}>
      {loading || loading2 ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={tw`flex-1 px-4 gap-4 mt-10`}>
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => handleCheck(item)}>
                  <PostCard post={item} />
                </Pressable>
              );
            }}
            ItemSeparatorComponent={<View style={tw`h-4`} />}
            ListEmptyComponent={
              <Text style={tw`text-center`}>Chưa có dự án nào</Text>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Posts;
