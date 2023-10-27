import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import Header from "../components/Header";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";
import { getVoiceInfo } from "../api/axios";
import UploadVoiceCard from "../components/UploadVoiceCard";
import ApprovedVoiceCard from "../components/ApprovedVoiceCard";
import WaitApproveVoiceCard from "../components/WaitApproveVoiceCard";

const MyVoice = ({ navigation }) => {
  const [voice, setVoice] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    getVoiceInfo(userInfo.voiceSeller.voiceSellerId)
      .then((voiceData) => {
        setVoice(voiceData);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError(true);
        }
        setLoading(false);
      });
  });

  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : error ? (
        <UploadVoiceCard />
      ) : voice.isApprove ? (
        <View style={tw`flex-1 justify-center items-center px-4`}>
          <ApprovedVoiceCard voice={voice} />
        </View>
      ) : (
        <View style={tw`flex-1 justify-center items-center px-4`}>
          <WaitApproveVoiceCard voice={voice} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MyVoice;
