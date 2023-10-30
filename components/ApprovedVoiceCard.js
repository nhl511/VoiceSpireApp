import React from "react";
import { Text, View } from "react-native";
import AudioPlayer from "./AudioPlayer";
import tw from "twrnc";
const ApprovedVoiceCard = ({ voice }) => {
  return (
    <View style={tw`bg-[#f5f5f5] p-5 w-90 gap-5 rounded-3xl`}>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl font-bold text-center`}>
          {voice.voiceSeller.fullname}
        </Text>
        <AudioPlayer link={voice.mainVoiceLink} />
      </View>
      <View style={tw`gap-2`}>
        <View style={tw`flex-row justify-between`}>
          <Text>Giới tính giọng đọc</Text>
          <Text>{voice.voiceGender}</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Vùng miền</Text>
          <Text>{voice.voiceRegion}</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Tone giọng</Text>
          {voice.voiceTone === 5 && <Text>Rất cao</Text>}
          {voice.voiceTone === 4 && <Text>Cao</Text>}
          {voice.voiceTone === 3 && <Text>Vừa</Text>}
          {voice.voiceTone === 2 && <Text>Thấp</Text>}
          {voice.voiceTone === 1 && <Text>Rất thấp</Text>}
          {voice.voiceTone === 0 && <Text>Không có</Text>}
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Độ truyền cảm</Text>
          {voice.voiceInspirational === 5 && <Text>Rát tốt</Text>}
          {voice.voiceInspirational === 4 && <Text>Tốt</Text>}
          {voice.voiceInspirational === 3 && <Text>Khá</Text>}
          {voice.voiceInspirational === 2 && <Text>Trung bình</Text>}
          {voice.voiceInspirational === 1 && <Text>Kém</Text>}
          {voice.voiceInspirational === 0 && <Text>Không có</Text>}
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Tốc độ đọc</Text>
          {voice.voiceSpeed === 3 && <Text>Nhanh</Text>}
          {voice.voiceSpeed === 2 && <Text>Vừa</Text>}
          {voice.voiceSpeed === 1 && <Text>Chậm</Text>}
          {voice.voiceSpeed === 0 && <Text>Không có</Text>}
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Khả năng phát âm</Text>
          {voice.voicePronouce === 5 && <Text>Rát tốt</Text>}
          {voice.voicePronouce === 4 && <Text>Tốt</Text>}
          {voice.voicePronouce === 3 && <Text>Khá</Text>}
          {voice.voicePronouce === 2 && <Text>Trung bình</Text>}
          {voice.voicePronouce === 1 && <Text>Kém</Text>}
          {voice.voicePronouce === 0 && <Text>Không có</Text>}
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Thể hiện trọng âm</Text>
          {voice.voiceStress === 5 && <Text>Rát tốt</Text>}
          {voice.voiceStress === 4 && <Text>Tốt</Text>}
          {voice.voiceStress === 3 && <Text>Khá</Text>}
          {voice.voiceStress === 2 && <Text>Trung bình</Text>}
          {voice.voiceStress === 1 && <Text>Kém</Text>}
          {voice.voiceStress === 0 && <Text>Không có</Text>}
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Chất giọng</Text>
          <Text>{voice.voiceTypes[0].voiceTypeDetail}</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <Text>Tính chất phù hợp</Text>
          <Text>{voice.voiceProperties[0].voicePropertyName}</Text>
        </View>
      </View>
    </View>
  );
};

export default ApprovedVoiceCard;
