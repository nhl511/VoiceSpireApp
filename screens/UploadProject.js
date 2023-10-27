import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import tw from "twrnc";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from '@react-native-community/datetimepicker';
import { LinearGradient } from "expo-linear-gradient";

const genderList = ['Nam', 'Nữ', 'Khác'];
const typeOfDocList = ['Quảng cáo', 'Kể chuyện', 'Thuyết trình', 'Thuyết minh', 'Review phim', 'Thời sự', 'Thông báo'];
const regionList = ['Miền Trung', 'Miền Nam', 'Miền Bắc'];
const localList = ['Hồ Chí Minh', 'Hà Nội', 'Nghệ An', 'Khác'];
const toneList = [
  { key: '1', value: 'Rất thấp' },
  { key: '2', value: 'Thấp' },
  { key: '3', value: 'Vừa' },
  { key: '4', value: 'Cao' },
  { key: '5', value: 'Rất cao' },
];
const pronounceList = [
  { key: '1', value: 'Kém' },
  { key: '2', value: 'Trung bình' },
  { key: '3', value: 'Khá' },
  { key: '4', value: 'Tốt' },
  { key: '5', value: 'Rất tốt' },
];
const speedList = [
  { key: '1', value: 'Chậm' },
  { key: '2', value: 'Vừa' },
  { key: '3', value: 'Nhanh' },
]

const UploadProject = ({ navigation }) => {
  const [gender, setGender] = useState('Nam');
  const [typeOfDoc, setTypeOfDoc] = useState('Quảng cáo');
  const [region, setRegion] = useState('Miền Nam');
  const [local, setLocal] = useState('Hồ Chí Minh');
  const [tone, setTone] = useState('Vừa');
  const [pronounce, setPronounce] = useState('Khá');
  const [inspiration, setInspiration] = useState('Khá');
  const [speed, setSpeed] = useState('Vừa');
  const [stress, setStress] = useState('Khá');
  const [price, setPrice] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  const handleDatePicker = (event, selectDate) => {
    const currentDate = selectDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setSelectedDate(formatDate);
    setShowDateTimePicker(false);
  }

  return (
    <LinearGradient colors={['#fee66a', '#ffffff']} style={tw`flex-1`}>
      <SafeAreaView style={tw`flex-1 android:pt-10`}>
        <ScrollView>
          <Header navigation={navigation} />
          <Text style={tw`text-center font-bold text-2xl uppercase mt-3`}>Đăng tải thông tin tuyển dụng giọng đọc</Text>

          <View style={tw`mt-5 ml-5`}>
            <TextInput placeholder="Tiêu đề"
              style={tw`bg-white py-1 px-3 rounded-full w-90 mb-2 `}
            />
            <TextInput placeholder="Mô tả"
              style={tw`bg-white py-1 px-3 rounded-full w-90 mb-2 `}
            />
            <TextInput placeholder="Yêu cầu"
              style={tw`bg-white py-1 px-3 rounded-full w-90 mb-2 `}
            />
          </View>
          <View style={tw`ml-5`}>
            <View style={tw`flex-row mt-2`}>
              <Text style={tw`font-semibold text-5 text-[#878787]`}>
                Bản demo duyệt giọng nói:
              </Text>
              <LinearGradient colors={['#43d100', '#a0cbac']}
                style={tw`rounded-lg px-5 ml-3 py-0.5`}>
                <TouchableOpacity>
                  <Text style={tw`text-white`}>File demo</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View style={tw`flex-row mt-2`}>
              <Text style={tw`font-semibold text-5 text-[#878787]`}>Văn bản cần đọc:</Text>
              <LinearGradient colors={['#43d100', '#a0cbac']}
                style={tw`rounded-lg px-5 ml-3 py-0.5`}>
                <TouchableOpacity>
                  <Text style={tw`text-white`}>File main</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View style={tw`flex-row mt-2`}>
              <Text style={tw`font-semibold text-5 text-[#878787]`}>Thumbnail:</Text>
              <LinearGradient colors={['#43d100', '#a0cbac']}
                style={tw`rounded-lg px-5 ml-3 py-0.5`}>
                <TouchableOpacity>
                  <Text style={tw`text-white`}>File thumbnail</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View style={tw`ml-5`}>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Giới tính:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setGender(value)}
              data={genderList}
              defaultOption={{ key: 'Nam', value: 'Nam' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Loại văn bản:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setTypeOfDoc(value)}
              data={typeOfDocList}
              defaultOption={{ key: 'Quảng cáo', value: 'Quảng cáo' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Vùng miền:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setRegion(value)}
              data={regionList}
              defaultOption={{ key: 'Miền Nam', value: 'Miền Nam' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Địa phương:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setLocal(value)}
              data={localList}
              defaultOption={{ key: 'Hồ Chí Minh', value: 'Hồ Chí Minh' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Tone:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setTone(value)}
              data={toneList}
              defaultOption={{ key: '3', value: 'Vừa' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Phát âm:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setPronounce(value)}
              data={pronounceList}
              defaultOption={{ key: '3', value: 'Khá' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Độ truyền cảm:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setInspiration(value)}
              data={pronounceList}
              defaultOption={{ key: '3', value: 'Khá' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Tốc độ đọc:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setSpeed(value)}
              data={speedList}
              defaultOption={{ key: '2', value: 'Vừa' }}
            />
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Trọng âm:</Text>
            <SelectList boxStyles={{
              width: 360,
              backgroundColor: 'white',
              marginTop: 5,
            }}
              setSelected={(value) => setStress(value)}
              data={pronounceList}
              defaultOption={{ key: '3', value: 'Khá' }}
            />
            <View style={tw`flex-row  mt-5`}>
              <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Giá:</Text>
              <TextInput placeholder="Nhập giá"
                style={tw`border-2 rounded-lg bg-white w-80 ml-1 mt-2 px-3`} />
            </View>
            <View style={tw`flex-row  mt-5`}>
              <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Độ dài văn bản:</Text>
              <TextInput placeholder="Nhập độ dài văn bản"
                style={tw`border-2 rounded-lg bg-white w-54 ml-1 mt-2 px-3`}
              />
            </View>
            <View style={tw`flex-row mt-5`}>
              <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Thời lượng:</Text>
              <TextInput placeholder="Nhập thời lượng"
                style={tw`border-2 rounded-lg bg-white w-62 ml-1 mt-2 px-3`}
              />
            </View>
            <View style={tw`flex-row  mt-5`}>
              <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Số lần chỉnh sửa tối đa:</Text>
              <TextInput placeholder="Nhập số lần chỉnh sửa"
                style={tw`border-2 rounded-lg bg-white w-35 ml-1 mt-2 px-3`}
              />
            </View>
            <View style={tw`flex-row mt-5`}>
              <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>Hạn hoàn tất: {selectedDate}</Text>
              {showDateTimePicker ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="default"
                  onChange={handleDatePicker}
                />
              ) : (
                    <TouchableOpacity onPress={() => setShowDateTimePicker(!showDateTimePicker)}>
                      <Text style={tw`mt-2 ml-2 text-lg font-bold`}>Nhấn vào đây</Text>
                    </TouchableOpacity>
              )}
            </View>
          </View>
          <TouchableOpacity style={tw`flex items-center my-5`}>
            <Text style={tw`text-center text-xl font-semibold bg-[#FFD600] rounded-md px-10 py-1`}>Hoàn tất</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default UploadProject;



