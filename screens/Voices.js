import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import tw from "twrnc";
import { checkBankAccountForBuyer, getApprovedVoices } from "../api/axios";
import VoiceCard from "../components/VoiceCard";
import { AuthContext } from "../context/AuthContext";

const Voices = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [voices, setVoices] = useState();
  const [selectedVoicedSellerId, setSelectedVoiceSellerId] = useState(null);
  const [loading2, setLoading2] = useState(false);
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
    getApprovedVoices().then((voicesData) => {
      setVoices(voicesData);
      setLoading(false);
    });
  });

  const handleSelectionChange = (voiceSellerId) => {
    setSelectedVoiceSellerId(voiceSellerId);
  };

  const handleCheck = async () => {
    setLoading2(true);
    await checkBankAccountForBuyer(userInfo.buyer.buyerId).then((result) => {
      result
        ? navigation.navigate("VoiceDetail", { selectedVoicedSellerId })
        : navigation.navigate("UpdateBank");
    });
    setLoading2(false);
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white relative`}>
      {loading || loading2 ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={selectedVoicedSellerId && tw`mb-25`}>
          <View style={tw`flex-row flex-1 gap-4 flex-wrap justify-center`}>
            {voices.map((item) => (
              <VoiceCard
                key={item.voiceSeller.voiceSellerId}
                voice={item}
                isSelected={
                  item.voiceSeller.voiceSellerId === selectedVoicedSellerId
                }
                onSelectionChange={() =>
                  handleSelectionChange(item.voiceSeller.voiceSellerId)
                }
              />
            ))}
          </View>
        </ScrollView>
      )}
      {selectedVoicedSellerId && (
        <View
          style={tw`absolute bg-white bottom-10 left-0 right-0 flex-row justify-center px-5`}
        >
          <TouchableOpacity
            style={tw`flex-1`}
            onPress={() => handleCheck()}
            disabled={loading2}
          >
            <View
              style={
                loading2
                  ? tw`bg-gray-300 px-4 py-2 rounded-md`
                  : tw`bg-yellow-400 px-4 py-2 rounded-md`
              }
            >
              <Text
                style={
                  loading2
                    ? tw`text-lg font-bold text-center text-gray-400`
                    : tw`text-lg font-bold text-center`
                }
              >
                {loading2 ? "ĐANG XỬ LÝ" : "CHỌN GIỌNG ĐỌC"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Voices;
