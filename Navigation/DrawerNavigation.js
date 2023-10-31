import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MyVoice from "../screens/MyVoice";
import Posts from "../screens/Posts";
import TrackingProjectsForSeller from "../screens/TrackingProjectsForSeller";
import UploadProjects from "../screens/UploadProject";
import Voices from "../screens/Voices";
import TrackingProjectForBuyer from "../screens/TrackingProjectsForBuyer";
import CustomDrawer from "../components/CustomDrawer";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#fdf8c8",
        drawerActiveTintColor: "#f39c12",
        drawerLabelStyle: { marginLeft: -15 },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {userInfo.role === "seller" && (
        <>
          <Drawer.Screen
            name="MyVoice"
            component={MyVoice}
            options={{
              title: "Giọng của tôi",
              drawerIcon: ({ color }) => (
                <Entypo name="mic" size={24} color={color} />
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("profile")}
                >
                  <View style={tw`mr-5`}>
                    <Ionicons name="person-outline" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Drawer.Screen
            name="Posts"
            component={Posts}
            options={{
              title: "Tìm kiếm dự án",
              drawerIcon: ({ color }) => (
                <FontAwesome name="search" size={24} color={color} />
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("profile")}
                >
                  <View style={tw`mr-5`}>
                    <Ionicons name="person-outline" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Drawer.Screen
            name="tpfs"
            component={TrackingProjectsForSeller}
            options={{
              title: "Theo dõi dự án",
              drawerIcon: ({ color }) => (
                <Foundation name="results" size={24} color={color} />
              ),
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("profile")}
                >
                  <View style={tw`mr-5`}>
                    <Ionicons name="person-outline" size={24} color="black" />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
        </>
      )}
      {userInfo.role === "buyer" && (
        <>
          <Drawer.Screen
            name="UploadProjects"
            component={UploadProjects}
            options={{
              title: "Đăng tải dự án",
              drawerIcon: ({ color }) => (
                <Ionicons name="add" size={25} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Voices"
            component={Voices}
            options={{
              title: "Tìm kiếm giọng đọc",
              drawerIcon: ({ color }) => (
                <FontAwesome name="search" size={24} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="tpfb"
            component={TrackingProjectForBuyer}
            options={{
              title: "Theo dõi dự án",
              drawerIcon: ({ color }) => (
                <Foundation name="results" size={24} color={color} />
              ),
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
