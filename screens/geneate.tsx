import { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from "react-native-navigation-bar-color";
import tw from "twrnc";
import { runImgeGenerator } from "@/lib/replicate";

export default function Generate() {
  const changeBarColor = async () => {
    try {
      const response = await changeNavigationBarColor("transparent", true);
      console.log(response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
    }
  };

  useEffect(() => {
    changeBarColor().then((success) => {});
  }, []);

  useEffect(() => {
    // runImgeGenerator().then((success) => {});
  }, []);
  return (
    <>
      <View style={tw`bg-[#0f0e0f] h-full w-full`}>
        <StatusBar />
        <View
          style={tw`w-full mt-12 px-4 flex flex-row items-center justify-between`}
        >
          <Text style={tw`text-white text-3xl font-extrabold`}>
            {" "}
            Generate image
          </Text>

          <TouchableOpacity onPress={(e) => {}}>
            <View
              style={tw`rounded-full bg-[#1f1f1d] p-2 flex justify-center items-center `}
            >
              <AntDesign name="appstore-o" size={24} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw` h-[40%] mt-6 mx-6 flex justify-center items-center`}>
          <Image
            source={require("../assets/images/ai-image-1.jpeg")}
            style={tw.style(`rounded-xl h-full w-full`, {
              resizeMode: "cover",
            })}
          />
        </View>

        <View style={tw``}>
          <View style={tw`flex flex-row justify-evenly mt-3`}>
            <TouchableOpacity onPress={(e) => {}}>
              <View
                style={tw`rounded-full bg-[#1f1f1d] p-2 flex flex-row justify-center items-center `}
              >
                <AntDesign name="export" size={24} color="gray" />
                <Text style={tw`text-gray-500`}> Export </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={(e) => {}}>
              <View
                style={tw`rounded-full bg-[#1f1f1d] p-2 flex flex-row justify-center items-center `}
              >
                <AntDesign name="save" size={24} color="gray" />
                <Text style={tw`text-gray-500`}> Save </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={(e) => {}}>
              <View
                style={tw`rounded-full bg-[#1f1f1d] p-2 flex flex-row justify-center items-center `}
              >
                <AntDesign name="sharealt" size={24} color="gray" />
                <Text style={tw`text-gray-500`}> Share </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={tw`bg-gray-700 rounded-xl border border-gray-700 m-4`}>
            <TextInput
              style={tw.style(`h-32 w-full text-white p-2`, {
                textAlignVertical: "top",
              })}
              underlineColorAndroid="transparent"
              placeholder="Type something"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              onChangeText={(text) => {}}
              // value={''}s
            />
          </View>
          <View style={tw`flex flex-row w-full p-2 justify-around`}>
            <TouchableOpacity onPress={(e) => {}}>
              <View
                style={tw`rounded-full bg-[#1f1f1d] p-3 flex flex-row justify-center items-center `}
              >
                <Text style={tw`text-gray-500`}> Prompt Suggestion </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={(e) => {}}>
              <View
                style={tw`rounded-full bg-[#1f1f1d] p-3 flex flex-row justify-center items-center `}
              >
                <Text style={tw`text-gray-500`}> Customization </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw``}>

            <TouchableOpacity onPress={(e) => {}}>
              <LinearGradient
                colors={["#ae55f2", "#7e49c9", "#6c57f2"]}
                end={{ x: 0.4, y: 0.5 }}
                style={tw`rounded-full p-3 mt-1 ios:mt-5`}
              >
                <Text
                  style={tw.style(
                    `text-white font-bold text-2xl text-center px-3`,
                  )}
                >
                  Generate
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
