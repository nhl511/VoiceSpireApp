import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import AudioPlayer from "./AudioPlayer";
const WaitApproveVoiceCard = ({ voice }) => {
  return (
    <View style={tw`gap-4 bg-[#f5f5f5] p-5 rounded-3xl`}>
      <View style={tw`gap-2`}>
        <Text style={tw`text-xl font-bold text-center`}>
          {voice.voiceSeller.fullname}
        </Text>
        <AudioPlayer link={voice.mainVoiceLink} />
      </View>
      <View>
        <Text style={tw`text-base`}>Giọng của bạn đang chờ phân tích</Text>
      </View>
    </View>
  );
};

export default WaitApproveVoiceCard;
