import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Genos_100Thin,
  Genos_200ExtraLight,
  Genos_300Light,
  Genos_400Regular,
  Genos_500Medium,
  Genos_600SemiBold,
  Genos_700Bold,
  Genos_800ExtraBold,
  Genos_900Black,
  Genos_100Thin_Italic,
  Genos_200ExtraLight_Italic,
  Genos_300Light_Italic,
  Genos_400Regular_Italic,
  Genos_500Medium_Italic,
  Genos_600SemiBold_Italic,
  Genos_700Bold_Italic,
  Genos_800ExtraBold_Italic,
  Genos_900Black_Italic,
} from "@expo-google-fonts/genos";
import tw from "twrnc";

export default function Onboarding() {
  let [fontsLoaded] = useFonts({
    Genos_100Thin,
    Genos_200ExtraLight,
    Genos_300Light,
    Genos_400Regular,
    Genos_500Medium,
    Genos_600SemiBold,
    Genos_700Bold,
    Genos_800ExtraBold,
    Genos_900Black,
    Genos_100Thin_Italic,
    Genos_200ExtraLight_Italic,
    Genos_300Light_Italic,
    Genos_400Regular_Italic,
    Genos_500Medium_Italic,
    Genos_600SemiBold_Italic,
    Genos_700Bold_Italic,
    Genos_800ExtraBold_Italic,
    Genos_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <View style={tw`h-full w-full`}>
        <View style={tw`h-[80%]`}>
          <ImageBackground
            source={require("../assets/images/hero.png")}
            style={tw.style("h-full w-full", { resizeMode: "cover" })}
          />
        </View>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(0,0,0,0.08)", "#19191a"]}
          style={tw`h-[45%] w-full absolute bottom-0 `}
          locations={[0.1, 0.4]}
        >
          <View style={tw`absolute bottom-10 flex justify-center px-3`}>
            <Text
              style={tw.style(`text-white font-extrabold text-4xl`, {
                fontFamily: "Genos_700Bold",
              })}
            >
              Generate art from text
            </Text>
            <TouchableOpacity onPress={(e) => {}}>
              <LinearGradient
                colors={["#ae55f2", "#7e49c9", "#6c57f2"]}
                end={{ x: 0.4, y: 0.5 }}
                style={tw`rounded-full p-3 mt-10`}
              >
                <Text
                  style={tw.style(
                    `text-white font-bold text-2xl text-center px-3`,
                  )}
                >
                  Get Started
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}
