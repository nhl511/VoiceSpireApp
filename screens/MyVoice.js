import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";
import tw from "twrnc";
import Header from "../components/Header";
import { TextInput } from "react-native-gesture-handler";

const MyVoice = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <Header navigation={navigation} />
      <View>
        <View style={tw` items-center mt-10`}>
          <Text style={tw`text-lg font-bold`}>
            HOÀN TẤT HỒ SƠ GIỌNG ĐỌC CỦA BẠN
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={tw`mt-8 font-bold items-center w-85`}>
            Để hoàn tất hồ sơ bạn vui lòng đọc văn bản dưới đây và gửi bản ghi
            âm giọng của bạn lên hệ thống
          </Text>
          <View style={tw`mt-7`}>
            <Button style={{}} title="Download Test.doc" />
          </View>
          <Text style={tw`mt-7 items-center w-90`}>
            Lưu ý: Khi thu âm vui lòng đọc rõ chữ, tránh tiếng ồn, khuyến cáo
            nên sử dụng micro hoặc các thiết bị thu âm để đạt được chất lượng
            phân tích tốt nhất từ hệ thống
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
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              width: 40,
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
        >
          <Text>Số lần chỉnh sửa</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 5,
              backgroundColor: "white",
              width: 40,
            }}
          />
        </View>
        <View
          style={{
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Button title="Tải lên file ghi âm"></Button>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 130,
            marginTop: 40,
          }}
        >
          <Button title="Hoàn tất"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyVoice;
