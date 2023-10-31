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
      <Image
        source={{ uri: item.voiceSeller.avatarLink }}
        style={tw`h-30 w-30 rounded-full`}
      />

      <View style={tw`p-3`}>
        <Text style={tw`font-bold`}>{item.voiceSeller.fullname}</Text>
        <AudioPlayer link={item.mainVoiceLink} />
        {item.voiceTypes.map((voiceType, index) => (
          <Text key={index} style={tw`border-solid border-2 w-20`}>
            {voiceType.voiceTypeDetail}
          </Text>
        ))}
        <Text>{item.voiceSeller.rateAvg}</Text>
        <Text style={tw`font-bold`}>Giá: {item.price} VNĐ/phút</Text>
      </View>

      <View style={tw`mt-14 h-10 rounded-full`}>
        <Button color={'black'} title='Gửi ngay' onPress={handleSendVoice} />
      </View>
    </View>
  )

  return (
    <SafeAreaView style={tw`flex-1 bg-[#FEE66C] android:pt-15`}>
      <Header navigation={navigation} />
      <FlatList
        data={voices}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Sử dụng index làm key
      />
    </SafeAreaView>
  )
}

export default Voices
