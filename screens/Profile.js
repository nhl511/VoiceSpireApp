import React from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white android:pt-15`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={tw`text-xl font-bold`}>Voice Spire</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Ngày sinh</Text>
          <TextInput placeholder="nhap" style={{ borderColor: 'black', borderWidth: 1, marginLeft: 10, width: '60%', paddingLeft: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Số điện thoại</Text>
          <TextInput placeholder="nhap" style={{ borderColor: 'black', borderWidth: 1, marginLeft: 10, width: '60%', paddingLeft: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Giới tính</Text>
          <View style={{ borderColor: 'black', height: 50, borderWidth: 1, marginLeft: 10, width: '50%', paddingLeft: 10 }}>
            <Picker>
              <Picker.Item label="Nam" value="option1" style={{ height: 40, marginBottom: 10 }}/>
              <Picker.Item label="Nữ" value="option2" style={{ height: 40, marginBottom: 10 }}/>
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Số tài khoản</Text>
          <TextInput placeholder="nhap" style={{ borderColor: 'black', borderWidth: 1, marginLeft: 10, width: '60%', paddingLeft: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Ngân hàng</Text>
          <TextInput placeholder="nhap" style={{ borderColor: 'black', borderWidth: 1, marginLeft: 10, width: '60%', paddingLeft: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Tên tài khoản</Text>
          <TextInput placeholder="nhap" style={{ borderColor: 'black', borderWidth: 1, marginLeft: 10, width: '60%', paddingLeft: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: "space-between", width: '70%', marginLeft: '15%' }}>
          <Text style={{ paddingTop: 4, fontSize: 16 }}>Địa chỉ</Text>
          <TextInput placeholder="nhap" style={{ borderColor: 'black', borderWidth: 1, marginLeft: 10, width: '60%', paddingLeft: 10 }} />
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <View style={{ width: 120, borderRadius: 15 }}>
          <Button
            title="Cập nhật"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
