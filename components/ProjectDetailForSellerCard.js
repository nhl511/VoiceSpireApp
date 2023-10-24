import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import AudioPlayer from "./AudioPlayer";
import { MaterialIcons } from "@expo/vector-icons";

const ProjectDetailForSellerCard = ({ voice }) => {
  return (
    <>
      <View style={tw`border py-2 px-4 flex-row items-center justify-between`}>
        <AudioPlayer link={voice.linkVoice} />
        <View style={tw`flex-row items-center gap-2`}>
          <MaterialIcons name="file-download" size={24} color="black" />

          <Text>Tải xuống</Text>
        </View>
      </View>
      {voice.feedback && (
        <View style={tw`mt-2`}>
          <Text>Yêu cầu chỉnh sửa: {voice.feedback}</Text>
        </View>
      )}
    </>
  );
};

export default ProjectDetailForSellerCard;
