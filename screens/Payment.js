import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { getPaymentDetail } from "../api/axios";

const Payment = ({ route }) => {
  const { item } = route.params;
  const [transaction, setTransaction] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPaymentDetail(item.voiceProjectId).then((projectData) => {
      setTransaction(projectData);
      setLoading(false);
    });
  }, []);
  return (
    <View style={tw`flex-1 bg-white`}>
      {loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`bg-[#EFFFFE] rounded-xl mx-5 mt-10`}>
            <Text style={tw`uppercase italic font-semibold text-xl mx-8 mt-5`}>
              Chi tiết giao dịch
            </Text>
            <View style={tw` mx-8 mt-3`}>
              <Text style={tw`uppercase text-[#636363] mt-3`}>
                Giá chi tiết
              </Text>
              <Text style={tw`text-[#636363] text-base`}>
                {transaction.price} VNĐ/phút
              </Text>
              <Text style={tw`uppercase text-[#636363] mt-3`}>
                Thời lượng yêu cầu
              </Text>
              <Text style={tw`uppercase text-[#636363]`}>
                {transaction.duration} phút
              </Text>
              <Text style={tw`uppercase font-semibold mt-3`}>
                Số tiền thanh toán
              </Text>
              <Text style={tw`font-semibold text-base`}>
                {transaction.toalOutputPrice} VNĐ
              </Text>
              <Text style={tw`uppercase font-semibold mt-3`}>
                Nội dung chuyển khoản
              </Text>
              <Text style={tw`font-semibold`}>{transaction.bankCode}</Text>
            </View>
            <Text style={tw`font-semibold italic text-base mt-5 ml-8`}>
              *Tại sao tôi phải thanh toán khoản chi phí này?
            </Text>
            <Text style={tw`mx-8 mt-2`}>
              Nhằm đảm bảo quyền lợi cho đôi bên. Khoảng phí này sẽ được hệ
              thống chuyển đến đối tác của bạn khi dự án kết thúc. Khoảng phí
              này sẽ được hoàn lại cho ban trong trường hợp đối tác không thực
              hiện đúng yêu cầu dự án đề ra hoặc khi dự án hết hạn mà dự án của
              bạn không đạt dược kết quả.
            </Text>
            <View style={tw`flex-row w-[300px] mx-10 mt-5`}>
              <View style={tw`flex-1 h-[1px] bg-black`} />
            </View>
            <View>
              <Text
                style={tw`text-xl text-[#D02828] text-center font-semibold mt-5`}
              >
                VN PAY
              </Text>
              <View
                style={tw`flex items-center justify-center border rounded-xl bg-[#fffce5] mx-8 my-3`}
              >
                <View style={tw`bg-white rounded-xl p-3 mt-5`}>
                  <Image
                    source={require("../assets/image/qrvnpay.png")}
                    style={tw`flex items-center justify-center w-32 h-32`}
                  />
                  <Text
                    style={tw`text-[#004e97] text-xs text-center font-semibold mt-2`}
                  >
                    VoiceSpire
                  </Text>
                </View>

                <Text
                  style={tw`text-[#004e97] font-bold text-base uppercase mt-1`}
                >
                  Nguyen Bao Long
                </Text>
                <Text style={tw`text-[#004e97] font-semibold`}>
                  Tài khoản 105872162225
                </Text>
                <Text style={tw`text-[#004e97] font-semibold`}>
                  VietinBank CN TAY TIEN GIANG - PGD CAI BE
                </Text>
                <Text style={tw`text-[#004e97] font-semibold`}>
                  Đại học FPT
                </Text>
              </View>

              <Text
                style={tw`text-xl text-[#D02828] text-center font-semibold mt-5`}
              >
                MOMO
              </Text>
              <View
                style={tw`flex items-center justify-center border rounded-xl bg-[#ffe24d] mx-8 my-3`}
              >
                <View style={tw`bg-white rounded-xl p-3 my-10`}>
                  <Image
                    source={require("../assets/image/qrmomo.png")}
                    style={tw`flex items-center justify-center w-32 h-32`}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Payment;
