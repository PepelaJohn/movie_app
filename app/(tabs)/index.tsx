import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    className="flex-1 items-center justify-center bg-white dark:bg-black"
    >
      <Text className="text-black font-bold text-2xl">Welcome</Text>

      <Link className="text-primary  py-3 px-6 rounded-md bg-gray-200" href={'/onboarding'}>Start</Link>
    </View>
  );
}

