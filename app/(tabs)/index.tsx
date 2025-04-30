import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
// import { Link } from "expo-router";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View className=" bg-black flex-1">
      <Image source={images.bg} className="absolute   w-full"></Image>
      <SafeAreaView className="flex-1 w-full ">
        <ScrollView
        
          className="flex-1  w-full px-4"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
        >
          <Image source={icons.logo} style={{
          
          }} className="w-12 z-10 my-2 self-center justify-self-center mx-auto" />

          <SearchBar onPress={()=>router.push('/(tabs)/search')} placeholder={"Search for a movie"}></SearchBar>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
