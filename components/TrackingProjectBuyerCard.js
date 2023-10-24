import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
const TrackingProjectBuyerCard = ({ post }) => {
  return (
    <View style={tw`flex-row  gap-2 h-25 relative`}>
      <View style={tw`h-full`}>
        <Image
          source={{
            uri: post.linkThumbnail,
          }}
          style={tw`h-full w-20`}
          resizeMode="cover"
        />
      </View>
      <View style={tw`p-2 gap-2`}>
        <View>
          <Text style={tw`text-base`}>{post.title}</Text>
        </View>
        <View>
          <Text style={tw`text-xs`}>
            Thời hạn{" "}
            <Text style={tw`font-bold `}>
              {moment(post.deadline).format("DD/MM/yyyy")}
            </Text>{" "}
            - Giá{" "}
            <Text style={tw`font-bold `}> {post.toalOutputPrice} VNĐ</Text>
          </Text>
        </View>
      </View>
      {post.projectStatus === "NotApproved" && (
        <View style={tw`bg-[#ecf0f1] absolute top-0 right-0 py-1 px-2`}>
          <Text style={tw`text-xs font-bold`}>Không được duyệt</Text>
        </View>
      )}
      {post.projectStatus === "Apply" && (
        <View style={tw`bg-[#f1c40f] absolute top-0 right-0 py-1 px-2`}>
          <Text style={tw`text-xs font-bold`}>Đang ứng tuyển</Text>
        </View>
      )}
      {post.projectStatus === "Processing" && (
        <View style={tw`bg-[#f1c40f] absolute top-0 right-0 py-1 px-2`}>
          <Text style={tw`text-xs font-bold`}>Dự án đã nhận</Text>
        </View>
      )}
      {post.projectStatus === "Done" && (
        <View style={tw`bg-[#27ae60] absolute top-0 right-0 py-1 px-2`}>
          <Text style={tw`text-xs font-bold text-white`}>Hoàn thành</Text>
        </View>
      )}
      {post.projectStatus === "WaitToAccept" && (
        <View style={tw`bg-[#ecf0f1] absolute top-0 right-0 py-1 px-2`}>
          <Text style={tw`text-xs font-bold`}>Đã gửi lời mời</Text>
        </View>
      )}
      {post.projectStatus === "Denied" && (
        <View style={tw`bg-[#ecf0f1] absolute top-0 right-0 py-1 px-2`}>
          <Text style={tw`text-xs font-bold`}>Không nhận lời mời</Text>
        </View>
      )}
      {post.projectStatus === "WaitApprove" &&
        post.paymentStatus === "Pending" && (
          <View style={tw`bg-[#e74c3c] absolute top-0 right-0 py-1 px-2`}>
            <Text style={tw`text-xs font-bold text-white`}>Chờ thanh toán</Text>
          </View>
        )}
    </View>
  );
};

export default TrackingProjectBuyerCard;
