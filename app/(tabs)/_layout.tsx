import {
  View,
  Image,
  ImageSourcePropType,
  Text,
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
      className="flex-row items-center h-[80px] justify-center gap-2 px-4 py-2 w-[110px]   "
    >
      <Image className="size-5" tintColor={'#0052cc'} source={icon} />
      <Text className="text-xs font-medium text-blue-500">{text}</Text>
    </View>
  ) : (
    <View className="items-center justify-center">
      <Image className="size-5" tintColor={'#a8b5db'} source={icon} />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      // tabBarActiveTintColor: '#0052cc',
      // tabBarBackground:()=>(<View className="bg-black"></View>),
      tabBarStyle: {
        backgroundColor: '#0f0d23',
        position:'absolute',
        borderWidth:0,
        borderBlockColor:'black',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        overflow: 'hidden',
        height: 80,
        paddingHorizontal: 10,
      },
      tabBarItemStyle: {
        // borderRadius: 100,
        marginBottom: 10,
        marginTop: 10,
        height: 50,
        width: 120,
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.home} text="Home" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ 
          headerShown: false, 
          title: "Search",
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.search} text="Search" focused={focused} />,
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
          tabBarIcon: ({ focused }) => <TabIcon icon={icons.person} text="Profile" focused={focused} />,
        }}
      />

      
    </Tabs>
  );
};

export default _layout;