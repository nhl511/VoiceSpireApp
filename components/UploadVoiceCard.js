import React, { useContext, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "twrnc";
import { AuthContext } from "../context/AuthContext";
import { uploadVoiceProfile } from "../api/axios";
const UploadVoiceCard = () => {
  const [price, setPrice] = useState("");
  const { userInfo } = useContext(AuthContext);
  const mp3File =
    "https://firebasestorage.googleapis.com/v0/b/voicespire-7162e.appspot.com/o/voices%2F20231014064304816.mp3?alt=media&token=db188105-f756-427a-b677-b6454780559c";
  const handleSubmit = async () => {
    await uploadVoiceProfile(
      userInfo.voiceSeller.voiceSellerId,
      mp3File,
      1,
      price
    );
  };

  return (
    <View style={tw`mt-8`}>
      <View style={tw` items-center`}>
        <Text style={tw`text-lg font-bold`}>
          HOÀN TẤT HỒ SƠ GIỌNG ĐỌC CỦA BẠN
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={tw`mt-2 font-bold items-center w-85`}>
          Để hoàn tất hồ sơ bạn vui lòng đọc văn bản dưới đây và gửi bản ghi âm
          giọng của bạn lên hệ thống
        </Text>
        <View style={tw`mt-2`}>
          <Button title="Download Test.doc" disabled />
          <Text style={tw`mt-2`}>(Xài Expo nên Ko hoạt động)</Text>
        </View>
        <Text style={tw`mt-7 items-center w-90`}>
          Lưu ý: Khi thu âm vui lòng đọc rõ chữ, tránh tiếng ồn, khuyến cáo nên
          sử dụng micro hoặc các thiết bị thu âm để đạt được chất lượng phân
          tích tốt nhất từ hệ thống
        </Text>
      </View>
      <View
        style={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Button title="Tải lên file ghi âm" disabled />
        <Text style={tw`mt-2`}>(Xài Expo nên Ko hoạt động)</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={tw`mt-5 font-bold`}>Mức giá cho giọng nói của bạn:</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text>Giá: </Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          inputMode="numeric"
          style={{
            paddingLeft: 5,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            width: 90,
            paddingVertical: 5,
            fontSize: 20,
          }}
        />
        <Text> VNĐ / phút</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <TouchableOpacity onPress={handleSubmit}>
          <View style={tw`bg-yellow-400 px-8 py-2 rounded-md`}>
            <Text style={tw`text-lg font-bold`}>Hoàn tất</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UploadVoiceCard;
