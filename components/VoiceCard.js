import React, { useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native";
import tw from "twrnc";
import AudioPlayer from "./AudioPlayer";
import { FontAwesome } from "@expo/vector-icons";

const VoiceCard = ({ voice, isSelected, onSelectionChange }) => {
  const myString = voice.voiceTypes[0].voiceTypeDetail;
  const myString2 = voice.voiceProperties[0].voicePropertyName;

  const myArray = myString.split(", ");
  const myArray2 = myString2.split(", ");

  return (
    <View style={tw`border border-gray-300 p-2 rounded-md gap-2 w-45`}>
      <View style={tw`flex-row gap-2 flex-wrap h-25`}>
        {myArray.map((item) => (
          <View style={tw`bg-yellow-200 px-2 py-1 rounded-md`}>
            <Text style={tw`text-xs font-bold text-yellow-600`}>{item}</Text>
          </View>
        ))}
        {myArray2.map((item2) => (
          <View style={tw`bg-yellow-200 px-2 py-1 rounded-md`}>
            <Text style={tw`text-xs font-bold text-yellow-600`}>{item2}</Text>
          </View>
        ))}
      </View>

      <View style={tw`flex-row gap-2 items-center mt-5`}>
        <Text style={tw`text-sm font-bold`}>{voice.voiceSeller.fullname}</Text>
      </View>
      <View style={tw`flex-row`}>
        <AudioPlayer link={voice.mainVoiceLink} />
      </View>
      <View>
        <View style={tw`flex-row gap-1 items-center`}>
          <Text style={tw`text-sm font-bold`}>{voice.price}</Text>
          <Text style={tw`text-xs`}>VNĐ / phút</Text>
        </View>
      </View>
      <View style={tw`mt-1`}>
        <Pressable onPress={onSelectionChange}>
          <View
            style={
              isSelected
                ? tw`bg-black border-2 border-yellow-400 flex-row justify-center rounded-sm`
                : tw`bg-yellow-400 rounded-sm`
            }
          >
            <View style={tw`flex-row justify-center items-center gap-2`}>
              {isSelected && (
                <FontAwesome name="check-circle" size={18} color="#facc15" />
              )}
              <Text
                style={
                  isSelected
                    ? tw`text-center font-bold py-2 text-yellow-400`
                    : tw`text-center font-bold py-2`
                }
              >
                {isSelected ? "Đã chọn" : "Chọn"}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default VoiceCard;
