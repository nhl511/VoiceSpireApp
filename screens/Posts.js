import React, { useEffect, useState } from "react";
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
import { getPosts } from "../api/axios";

const Posts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPosts(1, 100).then((postsData) => {
      setPosts(postsData);
      setLoading(false);
    });
  }, []);
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={tw`px-4 gap-4 mt-10`}>
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate("pdfa", { item });
                  }}
                >
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
