import React, { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
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
    <View>
      <View style={tw` items-center mt-10`}>
        <Text style={tw`text-lg font-bold`}>
          HOÀN TẤT HỒ SƠ GIỌNG ĐỌC CỦA BẠN
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={tw`mt-8 font-bold items-center w-85`}>
          Để hoàn tất hồ sơ bạn vui lòng đọc văn bản dưới đây và gửi bản ghi âm
          giọng của bạn lên hệ thống
        </Text>
        <View style={tw`mt-7`}>
          <Button title="Download Test.doc" disabled />
          <Text style={tw`mt-2`}>(Xài Expo nên Ko hoạt động)</Text>
        </View>
        <Text style={tw`mt-7 items-center w-90`}>
          Lưu ý: Khi thu âm vui lòng đọc rõ chữ, tránh tiếng ồn, khuyến cáo nên
          sử dụng micro hoặc các thiết bị thu âm để đạt được chất lượng phân
          tích tốt nhất từ hệ thống
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={tw`mt-7 font-bold`}>
          Mức giá cho giọng nói của bạn (Không bắt buộc):
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 35,
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
            width: 60,
          }}
        />
        <Text> /phút</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      ></View>
      <View
        style={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Button title="Tải lên file ghi âm" disabled />
        <Text style={tw`mt-2`}>(Xài Expo nên Ko hoạt động)</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 130,
          marginTop: 40,
        }}
      >
        <Button title="Hoàn tất" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default UploadVoiceCard;
