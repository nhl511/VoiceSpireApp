import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import AudioPlayer from "./AudioPlayer";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { acceptOfficialVoice, sendFeedback } from "../api/axios";

const ProjectDetailForBuyerCard2 = ({ voice, projectStatus, navigation }) => {
  const [feedback, setFeedback] = useState("");
  const handleSendFeedback = async () => {
    await sendFeedback(voice.voiceTransactionId, feedback);
    navigation.navigate("pdfb2", { item });
  };
  const handleAccept = async () => {
    await acceptOfficialVoice(voice.voiceTransactionId);
    navigation.navigate("tpfb");
  };
  return (
    <>
      <View style={tw`flex-row items-center gap-2 mb-2`}>
        <MaterialIcons name="file-download" size={24} color="black" />
        <Text>Tải xuống</Text>
      </View>
      <View style={tw`bg-[#f5f5f5] py-2 px-4`}>
        <View style={tw`flex-row items-center gap-2`}>
          <Text style={tw`text-xl`}>{voice.voiceSeller.fullname}</Text>
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <AudioPlayer link={voice.linkVoice} />
          {projectStatus === "Processing" && !voice.feedback && (
            <TouchableOpacity onPress={handleAccept}>
              <View style={tw`bg-[#ffd600] px-4 py-2`}>
                <Text style={tw`font-bold`}>Chấp nhận</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
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
              value={feedback}
              onChangeText={setFeedback}
            />
            <TouchableOpacity onPress={handleSendFeedback}>
              <View style={tw`bg-[#ffd600]`}>
                <Text style={tw`font-bold px-4 py-1`}>Gửi</Text>
              </View>
            </TouchableOpacity>
          </View>
        )
      )}
    </>
  );
};

export default ProjectDetailForBuyerCard2;
