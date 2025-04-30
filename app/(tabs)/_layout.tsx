import {
  View,
  Text,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  text,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  text: string;
}) => {
  return focused ? (
    <View
      className="w-full h-full flex-1 overflow-hidden flex-row min-h-16 min-w-[112px] items-center justify-center gap-2 rounded-full"
     
    >

      <Image className="size-5" tintColor={'#151312'} source={icon}></Image>
      {/* <Text className="">{text}</Text> */}
    </View>
  ) : (
    <View className="size-full rounded-full items-center justify-center">

<Image className="size-5" tintColor={'#a8b5db'} source={icon}></Image>

    </View>
  );
};

const _layout = () => {
  return (
    <Tabs screenOptions={{
      // tabBarShowLabel:false,
      tabBarActiveTintColor:'blue'
    }} >
      {/* <Text>_layout</Text> */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} text="Home" focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.save} text="Saved" focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.person} text="Profle" focused={focused} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search", 
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.search} text="Search" focused={focused} />,

         }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _layout;
