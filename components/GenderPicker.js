import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const GenderPicker = ({ onGenderChange, selectedGender }) => {
  const [isPickerVisible, setIsPickerVisible] = useState(false)

  const genderOptions = ['Nam', 'Nữ', 'Khác']

  const togglePicker = () => {
    setIsPickerVisible(!isPickerVisible)
  }

  const handleGenderChange = (gender) => {
    onGenderChange(gender) // Thông báo giới tính đã thay đổi bằng cách gọi hàm từ props
    togglePicker()
  }

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.selectedValueContainer}
          onPress={togglePicker}
        >
          <Text style={styles.selectedValueText}>{selectedGender}</Text>
        </TouchableOpacity>
      </View>

      {isPickerVisible && (
        <Picker
          selectedValue={selectedGender}
          onValueChange={(itemValue) => handleGenderChange(itemValue)}
          style={styles.picker}
          mode='dialog'
        >
          {genderOptions.map((gender, index) => (
            <Picker.Item key={index} label={gender} value={gender} />
          ))}
        </Picker>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedValueContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
  selectedValueText: {
    fontSize: 16,
  },
})

export default GenderPicker
