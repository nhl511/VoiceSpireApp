import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Checkbox } from 'react-native-paper';
import axios from '../api/axios';
import { useNavigation } from '@react-navigation/native';

const RegisterBuyer = () => {
    const registerBuyerURL = '/api/Buyers/Register';
    const navigate = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');

    const [checked, setChecked] = useState(false);
    const [errorTextEmail, setErrorTextEmail] = useState('');
    const [errorTextPassword, setErrorTextPassword] = useState('');
    const [errorTextPasswordConfirm, setErrorTextPasswordConfirm] = useState('');
    const [errorTextPhone, setErrorTextPhone] = useState('');
    const [errorTextCompanyName, setErrorTextCompanyName] = useState('');
    const [errorTextAddress, setErrorTextAddress] = useState('');

    const handleRegisterBuyer = async () => {
        const registerBuyer = {
            fullname: companyName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            phone: phone,
            bankName: null,
            bankAccountName: null,
            bankNumber: null,
            isPro: true,
            status: true
        }

        const headers = {
            accept: "text/plain",
        }

        if (checked) {
            try {
                await axios.post(registerBuyerURL, registerBuyer, { headers })
                    .then((response) => {
                        if (response.status === 200) {
                            setErrorTextEmail('');
                            console.log(response.data);
                            navigate.navigate('Login');
                        }
                    })
                    .catch((error) => {
                        if (email === '') {
                            setErrorTextEmail('Yêu cầu nhập email');
                        } else {
                            setErrorTextEmail('')
                        }
                        if (password === '') {
                            setErrorTextPassword('Yêu cầu nhập mật khẩu');
                        } else {
                            setErrorTextPassword('')
                        }
                        if (passwordConfirm === '') {
                            setErrorTextPasswordConfirm('Yêu cầu nhập lại mật khẩu');
                        } else {
                            setErrorTextPasswordConfirm('')
                        }
                        if (phone === '') {
                            setErrorTextPhone('Yêu cầu nhập số điện thoại');
                        } else {
                            setErrorTextPhone('')
                        }
                        if (companyName === '') {
                            setErrorTextCompanyName('Yêu cầu nhập tên doanh nghiệp');
                        } else {
                            setErrorTextCompanyName('')
                        }
                        if (address === '') {
                            setErrorTextAddress('Yêu cầu nhập địa chỉ');
                        } else {
                            setErrorTextAddress('')
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Vui lòng chấp nhận điều khoản')
        }
    }
    return (
        <SafeAreaView style={tw`flex-1 bg-white android:pt-15 bg-[#ffd600] justify-center items-center`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={tw`text-transform: uppercase text-6.5 font-semibold text-center`}>Tạo tài khoản tuyển dụng</Text>
                    <Text style={tw`text-center text-3.8`}>Vui lòng nhập đầy đủ các thông tin được yêu cầu</Text>
                </View>
                <View style={tw`mt-5`}>
                    <Text style={tw`font-semibold text-4`}>Email*</Text>
                    <TextInput placeholder='Nhập Email của bạn' onChangeText={(text) => setEmail(text)}
                        style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                    />
                    {errorTextEmail && (
                        <Text style={tw`text-red-600 font-semibold`}>{errorTextEmail}</Text>
                    )}
                    <Text style={tw`font-semibold text-4`}>Mật khẩu*</Text>
                    <TextInput placeholder='Nhập mật khẩu' secureTextEntry onChangeText={(text) => setPassword(text)}
                        style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                    />
                    {errorTextPassword && (
                        <Text style={tw`text-red-600 font-semibold`}>{errorTextPassword}</Text>
                    )}
                    <Text style={tw`font-semibold text-4`}>Nhập lại mật khẩu*</Text>
                    <TextInput placeholder='Nhập lại mật khẩu' secureTextEntry onChangeText={(text) => setPasswordConfirm(text)}
                        style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                    />
                    {errorTextPasswordConfirm && (
                        <Text style={tw`text-red-600 font-semibold`}>{errorTextPasswordConfirm}</Text>
                    )}
                    <Text style={tw`font-semibold text-4`}>Số điện thoại*</Text>
                    <TextInput placeholder='Nhập số điện thoại' onChangeText={(text) => setPhone(text)}
                        style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                    />
                    {errorTextPhone && (
                        <Text style={tw`text-red-600 font-semibold`}>{errorTextPhone}</Text>
                    )}
                    <Text style={tw`font-semibold text-4`}>Tên doanh nghiệp*</Text>
                    <TextInput placeholder='Nhập tên doanh nghiệp' onChangeText={(text) => setCompanyName(text)}
                        style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                    />
                    {errorTextCompanyName && (
                        <Text style={tw`text-red-600 font-semibold`}>{errorTextCompanyName}</Text>
                    )}
                    <Text style={tw`font-semibold text-4`}>Địa chỉ*</Text>
                    <TextInput placeholder='Nhập địa chỉ' onChangeText={(text) => setAddress(text)}
                        style={tw`bg-[#ffffff] p-1 pl-3 my-1 text-5 rounded-xl`}
                    />
                    {errorTextAddress && (
                        <Text style={tw`text-red-600 font-semibold`}>{errorTextAddress}</Text>
                    )}
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
                    <TouchableOpacity style={tw` flex items-center mt-5 `}
                        onPress={handleRegisterBuyer}>
                        <Text style={tw`bg-[#ffffff] text-center px-12 py-2 text-5 rounded-3xl`}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

// export default RegisterBuyer
