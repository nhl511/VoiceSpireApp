import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  Button,
} from 'react-native'
import Header from '../components/Header'
import tw from 'twrnc'
import AudioPlayer from '../components/AudioPlayer'
import { getApprovedVoices } from '../api/axios'

const Voices = ({ navigation }) => {
  const [voices, setVoices] = useState([])

  useEffect(() => {
    // Sử dụng axios để lấy dữ liệu và cập nhật state voices
    getApprovedVoices().then((data) => setVoices(data))
  }, [])

  const handleSendVoice = () => {
    alert('Đã gửi')
  }

  const renderItem = ({ item }) => (
    <View style={tw`flex flex-row m-3 bg-[#FCF8C8] p-3 rounded-md`}>
      <View style={tw`p-3`}>
        <Text style={tw`font-bold mb-2`}>
          {item.voiceSeller.fullname} | Giọng {item.voiceGender}
        </Text>

        <AudioPlayer link={item.mainVoiceLink} />
        {item.voiceTypes.map((voiceType, index) => (
          <View key={index}>
            <Text style={tw`italic p-2 m-1`}>{voiceType.voiceTypeDetail}</Text>
          </View>
        ))}

        <Text style={tw`font-bold mt-2 ml-20`}>Giá: {item.price} VNĐ/phút</Text>
      </View>

      <View style={tw`mt-14 ml-7 h-10 bg-[#485460] rounded-full`}>
        <Button color={'white'} title='Gửi ngay' onPress={handleSendVoice} />
      </View>
    </View>
  )

  return (
    <SafeAreaView style={tw`flex-1 bg-[#FEE66C] android:pt-15`}>
      <FlatList
        data={voices}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}

export default Voices
