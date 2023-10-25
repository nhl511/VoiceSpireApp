import React from "react";
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import tw from "twrnc";
import AudioPlayer from "./AudioPlayer";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";

const ProjectDetailForBuyerCard2 = ({ voice, projectStatus }) => {
  return (
    <>
      <View style={tw`flex-row items-center gap-2 mb-2`}>
        <MaterialIcons name="file-download" size={24} color="black" />
        <Text>Tải xuống</Text>
      </View>
      <View style={tw`border py-2 px-4 flex-row items-center justify-between`}>
        <AudioPlayer link={voice.linkVoice} />
        {projectStatus === "Processing" && !voice.feedback && (
          <View style={tw`bg-[#ffd600] px-4 py-2`}>
            <Text style={tw`font-bold`}>Chấp nhận</Text>
          </View>
        )}
      </View>

      {voice.feedback ? (
        <View style={tw`mt-2`}>
          <Text>Yêu cầu chỉnh sửa: {voice.feedback}</Text>
        </View>
      ) : (
        projectStatus === "Processing" && (
          <View style={tw`flex-row items-center gap-2 p-2 mt-1`}>
            <TextInput
              placeholder="Nhập yêu cầu chỉnh sửa"
              style={tw`border px-4 py-1 rounded-xl  text-base flex-1`}
            />
            <View style={tw`bg-[#ffd600]`}>
              <Text style={tw`font-bold px-4 py-1`}>Gửi</Text>
            </View>
          </View>
        )
      )}
    </>
  );
};

export default ProjectDetailForBuyerCard2;
