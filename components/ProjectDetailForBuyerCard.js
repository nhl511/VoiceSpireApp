import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AudioPlayer from "./AudioPlayer";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { acceptDemo } from "../api/axios";
const ProjectDetailForBuyerCard = ({ voice, navigation }) => {
  let myArray = "";
  let myArray2 = "";
  if (voice.voiceDetail !== null && voice.voiceDetail.voiceTypes !== null) {
    const myString = voice.voiceDetail.voiceTypes[0].voiceTypeDetail;
    myArray = myString.split(", ");
  }
  if (
    voice.voiceDetail !== null &&
    voice.voiceDetail.voiceProperties !== null
  ) {
    const myString2 = voice.voiceDetail.voiceProperties[0].voicePropertyName;
    myArray2 = myString2.split(", ");
  }

  const handleAccept = async () => {
    await acceptDemo(voice.voiceJobId, voice.voiceProjectId);
    navigation.navigate("tpfb");
  };
  return (
    <>
      <View style={tw`flex-row items-center gap-2 mb-2`}>
        <MaterialIcons name="file-download" size={24} color="black" />
        <Text>Tải xuống</Text>
      </View>
      <View style={tw` p-4 gap-2 bg-[#f5f5f5]`}>
        <View style={tw`flex-row items-center gap-2`}>
          <Text style={tw`text-xl`}>{voice.voiceSeller.fullname}</Text>
          {voice.voiceDetail && (
            <Text style={tw`text-xs`}>
              Giọng {voice.voiceDetail.voiceGender}
            </Text>
          )}
        </View>
        <View>
          <View style={tw`flex-row gap-2 flex-wrap mb-2`}>
            {myArray.length !== 0 &&
              myArray.map((item) => (
                <View style={tw`border px-4 py-1`}>
                  <Text style={tw`text-xs`}>{item}</Text>
                </View>
              ))}

            {myArray2.length !== 0 &&
              myArray2.map((item2) => (
                <View style={tw`border px-4 py-1`}>
                  <Text style={tw`text-xs`}>{item2}</Text>
                </View>
              ))}
          </View>
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <AudioPlayer link={voice.linkDemo} />
          <TouchableOpacity onPress={handleAccept}>
            <View style={tw`bg-[#ffd600] px-4 py-2`}>
              <Text style={tw`font-bold`}>Chấp nhận ứng tuyển</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProjectDetailForBuyerCard;
