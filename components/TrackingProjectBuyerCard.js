import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
const TrackingProjectBuyerCard = ({ post }) => {
  return (
    <>
      <View>
        {post.projectStatus === "NotApproved" && (
          <View style={tw`bg-[#ecf0f1] py-1 px-2`}>
            <Text style={tw`text-xs font-bold`}>Không được duyệt</Text>
          </View>
        )}
        {post.projectStatus === "Apply" && (
          <View style={tw`bg-[#f1c40f] py-1 px-2`}>
            <Text style={tw`text-xs font-bold`}>Đang ứng tuyển</Text>
          </View>
        )}
        {post.projectStatus === "Processing" && (
          <View style={tw`bg-[#f1c40f] py-1 px-2`}>
            <Text style={tw`text-xs font-bold`}>Dự án đã nhận</Text>
          </View>
        )}
        {post.projectStatus === "Done" && (
          <View style={tw`bg-[#27ae60] py-1 px-2`}>
            <Text style={tw`text-xs font-bold text-white`}>Hoàn thành</Text>
          </View>
        )}
        {post.projectStatus === "WaitToAccept" && (
          <View style={tw`bg-[#ecf0f1]  py-1 px-2`}>
            <Text style={tw`text-xs font-bold`}>Đã gửi lời mời</Text>
          </View>
        )}
        {post.projectStatus === "Denied" && (
          <View style={tw`bg-[#ecf0f1]  py-1 px-2`}>
            <Text style={tw`text-xs font-bold`}>Không nhận lời mời</Text>
          </View>
        )}
        {post.projectStatus === "WaitApprove" && (
          <View style={tw`bg-[#e74c3c] py-1 px-2`}>
            <Text style={tw`text-xs font-bold text-white`}>Chờ thanh toán</Text>
          </View>
        )}
      </View>
      <View
        style={
          post.projectStatus === "NotApproved"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#ecf0f1] bg-gray-50`
            : post.projectStatus === "Apply"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#f1c40f] bg-yellow-50`
            : post.projectStatus === "Processing"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#f1c40f] bg-yellow-50`
            : post.projectStatus === "Done"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#27ae60] bg-green-50`
            : post.projectStatus === "WaitToAccept"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#ecf0f1] bg-gray-50`
            : post.projectStatus === "Denied"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#ecf0f1] bg-gray-50`
            : post.projectStatus === "WaitApprove"
            ? tw`flex-row gap-2 h-25 border-b-4 border-[#e74c3c] bg-red-50`
            : null
        }
      >
        <View style={tw`h-full`}>
          {post.linkThumbnail ? (
            <Image
              source={{
                uri: post.linkThumbnail,
              }}
              style={tw`h-full w-20`}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={require("../assets/logo.png")}
              style={tw`h-full w-20`}
              resizeMode="cover"
            />
          )}
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
      </View>
    </>
  );
};

export default TrackingProjectBuyerCard;
