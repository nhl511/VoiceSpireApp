import moment from "moment/moment";
import React from "react";
import { Button } from "react-native";
import { Image, Text, View } from "react-native";
import tw from "twrnc";

const PostCard = ({ post }) => {
  return (
    <View style={tw`flex-row gap-2 h-25`}>
      <View style={tw`h-full`}>
        <Image
          source={{
            uri: post.linkThumbnail,
          }}
          style={tw`h-full w-20`}
          resizeMode="cover"
        />
      </View>
      <View style={tw`p-2 gap-2`}>
        <View style={tw`flex-row items-center gap-2 `}>
          <View style={tw`border p-1`}>
            <Text style={tw`text-xs`}>{`Giọng ${post.voiceRegion}`}</Text>
          </View>
          <View style={tw`border p-1`}>
            {post.voiceTone === 1 ? (
              <Text style={tw`text-xs`}>Giọng rất thấp</Text>
            ) : post.voiceTone === 2 ? (
              <Text style={tw`text-xs`}>Giọng thấp</Text>
            ) : post.voiceTone === 3 ? (
              <Text style={tw`text-xs`}>Giọng vừa</Text>
            ) : post.voiceTone === 4 ? (
              <Text style={tw`text-xs`}>Giọng cao</Text>
            ) : post.voiceTOne === 5 ? (
              <Text style={tw`text-xs`}>Giọng rất cao</Text>
            ) : null}
          </View>
          <View style={tw`border p-1`}>
            {post.voicePronouce === 1 ? (
              <Text style={tw`text-xs`}>Phát âm kém</Text>
            ) : post.voicePronouce === 2 ? (
              <Text style={tw`text-xs`}>Phát âm trung bình</Text>
            ) : post.voicePronouce === 3 ? (
              <Text style={tw`text-xs`}>Phát âm khá</Text>
            ) : post.voicePronouce === 4 ? (
              <Text style={tw`text-xs`}>Phát âm tốt</Text>
            ) : post.voicePronouce === 5 ? (
              <Text style={tw`text-xs`}>Phát âm rất tốt</Text>
            ) : null}
          </View>
        </View>
        <View>
          <Text style={tw`text-xs mb-2`}>{post.title}</Text>
        </View>
        <View>
          <Text style={tw`text-xs`}>
            Thời hạn{" "}
            <Text style={tw`font-bold `}>
              {moment(post.deadline).format("DD/MM/yyyy")}
            </Text>{" "}
            - Giá <Text style={tw`font-bold `}>{post.toalOutputPrice} VNĐ</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
