import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import tw from "twrnc";
const TrackingProjectSellerCard = ({ job }) => {
  return (
    <View style={tw`flex-row gap-2 h-25`}>
      <View style={tw`h-full`}>
        {job.voiceProject.linkThumbnail ? (
          <Image
            source={{
              uri: job.voiceProject.linkThumbnail,
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
      <View style={tw`p-2 gap-2 flex-1`}>
        <View style={tw`flex-row`}>
          {job.voiceJobStatus === "Applying" && (
            <View style={tw`bg-[#bdc3c7] py-1 px-2`}>
              <Text style={tw`text-xs font-bold`}>Demo đang chờ duyệt</Text>
            </View>
          )}
          {job.voiceJobStatus === "Processing" &&
            job.voiceProject.projectType === "Post" && (
              <View style={tw`bg-[#2980b9] py-1 px-2`}>
                <Text style={tw`text-white text-xs font-bold`}>
                  Demo được chọn
                </Text>
              </View>
            )}
          {job.voiceJobStatus === "Processing" &&
            job.voiceProject.projectType === "send" && (
              <View style={tw`bg-[#2980b9] py-1 px-2`}>
                <Text style={tw`text-white text-xs font-bold`}>
                  Đã chấp nhận lời mời
                </Text>
              </View>
            )}
          {job.voiceJobStatus === "Done" && (
            <View style={tw`bg-[#2980b9] py-1 px-2`}>
              <Text style={tw`text-white text-xs font-bold`}>Hoàn thành</Text>
            </View>
          )}
          {job.voiceJobStatus === "waitToAccept" && (
            <View style={tw`bg-[#2980b9] py-1 px-2`}>
              <Text style={tw`text-white text-xs font-bold`}>Xem lời mời</Text>
            </View>
          )}
          {job.voiceJobStatus === "Denied" &&
            job.voiceProject.projectType === "Post" && (
              <View style={tw`bg-[#bdc3c7] py-1 px-2`}>
                <Text style={tw`text-xs font-bold`}>Demo không được chọn</Text>
              </View>
            )}
          {job.voiceJobStatus === "Denied" &&
            job.voiceProject.projectType === "send" && (
              <View style={tw`bg-[#bdc3c7] py-1 px-2`}>
                <Text style={tw`text-xs font-bold`}>Đã từ chối lời mời</Text>
              </View>
            )}
        </View>
        <View style={tw`flex-row gap-2`}>
          {job.voiceProject.voiceProperty && (
            <View style={tw`border p-1`}>
              <Text>{job.voiceProject.voiceProperty}</Text>
            </View>
          )}

          {job.voiceProject.voiceRegion && (
            <View style={tw`border p-1`}>
              <Text>{job.voiceProject.voiceRegion}</Text>
            </View>
          )}
        </View>
        <View style={tw`flex-row`}>
          <Text style={tw`text-base`}>{job.voiceProject.title}</Text>
        </View>
        <View>
          <Text style={tw`text-xs`}>
            Thời hạn{" "}
            <Text style={tw`font-bold `}>
              {moment(job.voiceProject.deadline).format("DD/MM/yyyy")}
            </Text>{" "}
            - Giá{" "}
            <Text style={tw`font-bold `}>
              {" "}
              {job.voiceProject.price} VNĐ/phút
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TrackingProjectSellerCard;
