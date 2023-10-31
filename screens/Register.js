import React, { useState } from 'react'
import axios from 'axios'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker'
import tw from 'twrnc'
import GenderPicker from '../components/GenderPicker'
import { useNavigation } from '@react-navigation/native'

const RegisterForm = () => {
  const [show, setShow] = useState(true)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    fullname: '',
    address: '',
    birthDay: new Date(),
    gender: 'Nam',
  })
  const navigation = useNavigation()

  const handleInputChange = (fieldName, value) => {
    setNewUser({ ...newUser, [fieldName]: value })
  }

  const handleGenderChange = (gender) => {
    setNewUser({ ...newUser, gender: gender })
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || newUser.birthDay
    setShow(Platform.OS === 'ios' ? true : false)
    setNewUser({ ...newUser, birthDay: currentDate })
  }

  const handleSignUp = () => {
    if (agreeTerms) {
      const apiUrl =
        'https://voicespireexeapi.azurewebsites.net/api/VoiceSellers/Register'

      axios
        .post(apiUrl, newUser)
        .then((response) => {
          alert('Đăng ký thành công')
          navigation.navigate('Login')
        })

        .catch((error) => {
          alert(error.response.data)
        })
    }
  }

  return (
    <View style={tw`bg-[#ffd600] flex-grow p-4 justify-center`}>
      <Text style={tw`text-xl font-bold text-gray-800 text-center`}>
        TẠO TÀI KHOẢN GIỌNG ĐỌC
      </Text>
      <Text style={tw`text-sm text-gray-600 text-center mb-3`}>
        Vui lòng nhập đầy đủ các thông tin được yêu cầu
      </Text>

      <Text style={tw`text-gray-800`}>Email*</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập email của bạn'
        value={newUser.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />

      <Text style={tw`text-gray-800`}>Mật khẩu*</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập mật khẩu'
        secureTextEntry
        value={newUser.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />

      <Text style={tw`text-gray-800`}>Nhập lại mật khẩu*</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập lại mật khẩu'
        secureTextEntry
        value={newUser.passwordConfirm}
        onChangeText={(text) => handleInputChange('passwordConfirm', text)}
      />

      <Text style={tw`text-gray-800 `}>Số điện thoại*</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập số điện thoại'
        value={newUser.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
      />

      <Text style={tw`text-gray-800 `}>Họ và tên*</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập họ và tên'
        value={newUser.fullname}
        onChangeText={(text) => handleInputChange('fullname', text)}
      />

      <Text style={tw`text-gray-800`}>Địa chỉ*</Text>
      <TextInput
        style={styles.input}
        placeholder='Nhập địa chỉ'
        value={newUser.address}
        onChangeText={(text) => handleInputChange('address', text)}
      />

      <Text style={tw`text-gray-800 `}>Ngày sinh*</Text>
      <View style={tw`items-center`}>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={newUser.birthDay}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}
      </View>

      <Text style={tw`text-gray-800 mb-2`}>Giới tính*</Text>
      <GenderPicker
        onGenderChange={handleGenderChange}
        selectedGender={newUser.gender}
      />

      <View style={tw`flex-row items-center`}>
        <CheckBox
          checked={agreeTerms}
          onPress={() => {
            setAgreeTerms(!agreeTerms)
          }}
        />
        <Text style={tw`text-gray-800`}>
          Tôi đã đọc và đồng ý với điều khoản của VoiceMarket
        </Text>
      </View>

      <Button
        title='Đăng Ký'
        onPress={handleSignUp}
        accessibilityLabel='Đăng Ký'
      />
    </View>
  )
}

export default RegisterForm

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    color: '#fff',
    backgroundColor: '#c32323',
  },
})
