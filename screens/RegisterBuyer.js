import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Checkbox } from 'react-native-paper';

const RegisterBuyer = () => {
    const [checked, setChecked] = useState(false);

    return (
        <View style={tw`bg-[#ffd600] flex-1 justify-center items-center`}>
            <View>
                <Text style={tw`text-transform: uppercase text-6.5 font-semibold text-center`}>Tạo tài khoản tuyển dụng</Text>
                <Text style={tw`text-center text-3.8`}>Vui lòng nhập đầy đủ các thông tin được yêu cầu</Text>
            </View>
            <View style={tw`mt-5`}>
                <Text style={tw`font-semibold text-4`}>Email*</Text>
                <TextInput placeholder='Nhập Email của bạn'
                    style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                />
                <Text style={tw`font-semibold text-4`}>Mật khẩu*</Text>
                <TextInput placeholder='Nhập mật khẩu' secureTextEntry
                    style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                />
                <Text style={tw`font-semibold text-4`}>Nhập lại mật khẩu*</Text>
                <TextInput placeholder='Nhập lại mật khẩu' secureTextEntry
                    style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                />
                <Text style={tw`font-semibold text-4`}>Số điện thoại*</Text>
                <TextInput placeholder='Nhập số điện thoại'
                    style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                />
                <Text style={tw`font-semibold text-4`}>Tên doanh nghiệp*</Text>
                <TextInput placeholder='Nhập tên doanh nghiệp'
                    style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                />
                <Text style={tw`font-semibold text-4`}>Địa chỉ*</Text>
                <TextInput placeholder='Nhập địa chỉ'
                    style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                />
                <View style={tw`flex flex-row mt-1`}>
                    <Checkbox status={checked ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(!checked)}
                    />
                    <Text style={tw`mt-2`}>
                        Tôi đã đọc và đồng ý với
                        <Text style={tw`font-semibold`}> điều khoản </Text>
                        của VoiceMarket
                    </Text>
                </View>
                <TouchableOpacity style={tw` flex items-center mt-5 `} >
                    <Text style={tw`bg-[#ffffff] text-center px-12 py-2 text-5 rounded-3xl`}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterBuyer