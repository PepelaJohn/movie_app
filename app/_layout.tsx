import { Stack } from "expo-router";
import './global.css'
export default function RootLayout() {
  return <Stack >
    <Stack.Screen
      name="(tabs)"
      
      options={{
        headerShown: false,
        // statusBarBackgroundColor: "#0f0d23",
      }}
    />
     
    <Stack.Screen
      name="movies/[id]"
      options={{
        headerShown: false,
      }}
    />
  </Stack>;
}
