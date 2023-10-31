import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import DrawerNavigation from "./DrawerNavigation";
import PostDescriptionForApplying from "../screens/PostDescriptionForApplying";
import Applying from "../screens/Applying";
import ProjectDetailForSeller from "../screens/ProjectDetailForSeller";
import Processing from "../screens/Processing";
import ProjectDetailForBuyer from "../screens/ProjectDetailForBuyer";
import ProjectDetailForBuyer2 from "../screens/ProjectDetailForBuyer2";
import Profile from "../screens/Profile";
import Payment from "../screens/Payment";
import UpdateBank from "../screens/UpdateBank";
import VoiceDetail from "../screens/VoiceDetail";
const Stack = createNativeStackNavigator();

const AuthenticatedStackNavigation = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Thông tin của bạn",
        }}
      />
      <Stack.Screen
        name="pdfa"
        component={PostDescriptionForApplying}
        options={{
          title: "Mô tả dự án",
        }}
      />
      <Stack.Screen
        name="applying"
        component={Applying}
        options={{
          title: "Tải lên bản ghi âm Demo",
        }}
      />
      <Stack.Screen
        name="processing"
        component={Processing}
        options={{
          title: "Tải lên bản ghi âm chính thức",
        }}
      />
      <Stack.Screen
        name="pdfs"
        component={ProjectDetailForSeller}
        options={{
          title: "Chi tiết dự án",
        }}
      />
      <Stack.Screen
        name="pdfb"
        component={ProjectDetailForBuyer}
        options={{
          title: "Chi tiết dự án",
        }}
      />
      <Stack.Screen
        name="pdfb2"
        component={ProjectDetailForBuyer2}
        options={{
          title: "Chi tiết dự án",
        }}
      />
      <Stack.Screen
        name="payment"
        component={Payment}
        options={{
          title: "Thanh toán",
        }}
      />
      <Stack.Screen
        name="UpdateBank"
        component={UpdateBank}
        options={{
          title: "Cập nhật thông tin ngân hàng",
        }}
      />
      <Stack.Screen name="VoiceDetail" component={VoiceDetail} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStackNavigation;
