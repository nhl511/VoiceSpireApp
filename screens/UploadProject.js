import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import tw from "twrnc";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import { uploadVoiceProject } from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const genderList = ["Nam", "Nữ", "Khác"];
const typeOfDocList = [
  "Quảng cáo",
  "Kể chuyện",
  "Thuyết trình",
  "Thuyết minh",
  "Review phim",
  "Thời sự",
  "Thông báo",
];
const regionList = ["Miền Trung", "Miền Nam", "Miền Bắc"];
const localList = ["Hồ Chí Minh", "Hà Nội", "Nghệ An", "Khác"];
const toneList = [
  { key: "1", value: "Rất thấp" },
  { key: "2", value: "Thấp" },
  { key: "3", value: "Vừa" },
  { key: "4", value: "Cao" },
  { key: "5", value: "Rất cao" },
];
const pronounceList = [
  { key: "1", value: "Kém" },
  { key: "2", value: "Trung bình" },
  { key: "3", value: "Khá" },
  { key: "4", value: "Tốt" },
  { key: "5", value: "Rất tốt" },
];
const speedList = [
  { key: "1", value: "Chậm" },
  { key: "2", value: "Vừa" },
  { key: "3", value: "Nhanh" },
];

const UploadProject = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [request, setRequest] = useState("");
  const [textLength, setTextLength] = useState();
  const [duration, setDuration] = useState();
  const [numberOfEdit, setNumberOfEdit] = useState();
  const [gender, setGender] = useState("Nam");
  const [typeOfDoc, setTypeOfDoc] = useState("Quảng cáo");
  const [region, setRegion] = useState("Miền Nam");
  const [local, setLocal] = useState("Hồ Chí Minh");
  const [tone, setTone] = useState("Vừa");
  const [pronounce, setPronounce] = useState("Khá");
  const [inspiration, setInspiration] = useState("Khá");
  const [speed, setSpeed] = useState("Vừa");
  const [stress, setStress] = useState("Khá");
  const [price, setPrice] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const demoFile =
    "https://firebasestorage.googleapis.com/v0/b/voicespire-7162e.appspot.com/o/docs%2F20231026160636786.docx?alt=media&token=536cb080-3c29-4011-9a64-5cd349ed0863";
  const mainFile =
    "https://firebasestorage.googleapis.com/v0/b/voicespire-7162e.appspot.com/o/docs%2F20231026160640695.docx?alt=media&token=8cc28dfc-72e8-4e8b-9b34-259e3fa5d726";
  const thumbnail =
    "https://firebasestorage.googleapis.com/v0/b/voicespire-7162e.appspot.com/o/imgs%2F20231030032304488.jpg?alt=media&token=2117681b-352d-4fad-917a-764adbd7ec74";
  const handleDatePicker = (event, selectDate) => {
    const currentDate = selectDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    setSelectedDate(formatDate);
    setShowDateTimePicker(false);
  };
  console.log(selectedDate);
  const handleSubmit = async () => {
    await uploadVoiceProject(
      userInfo.buyer.buyerId,
      title,
      description,
      price,
      duration,
      numberOfEdit,
      selectedDate,

      request,
      typeOfDoc,
      textLength,
      gender,
      Number(tone),
      region,
      local,
      Number(inspiration),
      Number(stress),
      Number(pronounce),
      Number(speed),
      demoFile,
      mainFile,
      thumbnail
    );

    navigation.navigate("tpfb");
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`mt-5`}>
        <View style={tw`items-center gap-4`}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Tiêu đề"
            style={tw`bg-white py-2 px-4 rounded-lg w-90 mb-2 border text-base `}
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Mô tả"
            style={tw`bg-white py-2 px-4 rounded-lg w-90 mb-2 border text-base `}
          />
          <TextInput
            value={request}
            onChangeText={setRequest}
            placeholder="Yêu cầu"
            style={tw`bg-white py-2 px-4 rounded-lg w-90 mb-2 border text-base `}
          />
        </View>
        <View style={tw`items-start px-8`}>
          <View style={tw`flex-row mt-2`}>
            <Text style={tw`font-semibold text-5 text-[#878787]`}>
              Bản demo duyệt giọng nói:
            </Text>
            <LinearGradient
              colors={["#43d100", "#a0cbac"]}
              style={tw`rounded-lg px-5 ml-3 py-0.5`}
            >
              <TouchableOpacity>
                <Text style={tw`text-white`}>File demo</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={tw`flex-row mt-2`}>
            <Text style={tw`font-semibold text-5 text-[#878787]`}>
              Văn bản cần đọc:
            </Text>
            <LinearGradient
              colors={["#43d100", "#a0cbac"]}
              style={tw`rounded-lg px-5 ml-3 py-0.5`}
            >
              <TouchableOpacity>
                <Text style={tw`text-white`}>File main</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          <View style={tw`flex-row mt-2`}>
            <Text style={tw`font-semibold text-5 text-[#878787]`}>
              Thumbnail:
            </Text>
            <LinearGradient
              colors={["#43d100", "#a0cbac"]}
              style={tw`rounded-lg px-5 ml-3 py-0.5`}
            >
              <TouchableOpacity>
                <Text style={tw`text-white`}>File thumbnail</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={tw`items-center mt-5`}>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Giới tính:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setGender(value)}
              data={genderList}
              defaultOption={{ key: "Nam", value: "Nam" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Loại văn bản:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setTypeOfDoc(value)}
              data={typeOfDocList}
              defaultOption={{ key: "Quảng cáo", value: "Quảng cáo" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Vùng miền:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setRegion(value)}
              data={regionList}
              defaultOption={{ key: "Miền Nam", value: "Miền Nam" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Địa phương:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setLocal(value)}
              data={localList}
              defaultOption={{ key: "Hồ Chí Minh", value: "Hồ Chí Minh" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Tone:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setTone(value)}
              data={toneList}
              defaultOption={{ key: "3", value: "Vừa" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Phát âm:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setPronounce(value)}
              data={pronounceList}
              defaultOption={{ key: "3", value: "Khá" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Độ truyền cảm:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setInspiration(value)}
              data={pronounceList}
              defaultOption={{ key: "3", value: "Khá" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Tốc độ đọc:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setSpeed(value)}
              data={speedList}
              defaultOption={{ key: "2", value: "Vừa" }}
            />
          </View>
          <View>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Trọng âm:
            </Text>
            <SelectList
              boxStyles={{
                width: 360,
                backgroundColor: "white",
                marginTop: 5,
              }}
              setSelected={(value) => setStress(value)}
              data={pronounceList}
              defaultOption={{ key: "3", value: "Khá" }}
            />
          </View>

          <View style={tw`flex-row  mt-5 px-6`}>
            <Text
              style={tw`text-[#878787] text-base font-semibold mt-2 flex-1`}
            >
              Giá:
            </Text>
            <TextInput
              value={price}
              onChangeText={setPrice}
              inputMode="numeric"
              placeholder="Nhập giá (VNĐ/phút)"
              style={tw`border rounded-lg px-4 py-2 flex-2`}
            />
          </View>
          <View style={tw`flex-row  mt-5 px-6`}>
            <Text
              style={tw`text-[#878787] text-base font-semibold mt-2 flex-1`}
            >
              Độ dài văn bản:
            </Text>
            <TextInput
              value={textLength}
              onChangeText={setTextLength}
              inputMode="numeric"
              placeholder="Nhập độ dài văn bản"
              style={tw`border rounded-lg px-4 py-2  flex-2`}
            />
          </View>
          <View style={tw`flex-row mt-5 px-6`}>
            <Text
              style={tw`text-[#878787] text-base font-semibold mt-2 flex-1`}
            >
              Thời lượng:
            </Text>
            <TextInput
              value={duration}
              onChangeText={setDuration}
              inputMode="numeric"
              placeholder="Nhập thời lượng (phút)"
              style={tw`border rounded-lg px-4 py-2 flex-2`}
            />
          </View>
          <View style={tw`flex-row  mt-5 px-6`}>
            <Text
              style={tw`text-[#878787] text-base font-semibold mt-2 flex-1`}
            >
              Số lần chỉnh sửa tối đa:
            </Text>
            <TextInput
              value={numberOfEdit}
              onChangeText={setNumberOfEdit}
              inputMode="numeric"
              placeholder="Nhập số lần chỉnh sửa tối đa"
              style={tw`border rounded-lg px-4 py-2 flex-2`}
            />
          </View>
          <View style={tw`flex-row mt-5`}>
            <Text style={tw`text-[#878787] text-5 font-semibold mt-2`}>
              Hạn hoàn tất: {selectedDate}
            </Text>
            {showDateTimePicker ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                onChange={handleDatePicker}
              />
            ) : (
              <TouchableOpacity
                onPress={() => setShowDateTimePicker(!showDateTimePicker)}
              >
                <Text style={tw`mt-2 ml-2 text-lg font-bold`}>
                  Nhấn vào đây
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={tw`flex items-center my-5`}
          onPress={handleSubmit}
        >
          <Text
            style={tw`text-center text-xl font-semibold bg-[#FFD600] rounded-md px-10 py-1`}
          >
            Hoàn tất
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadProject;
