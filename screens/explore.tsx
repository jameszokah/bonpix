import { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from "react-native-navigation-bar-color";
import tw from "twrnc";

type Item = {
  id: number;
  src: string;
};
export default function Explores() {
  const getExplores = async () => {};

  useEffect(() => {
    getExplores().then((success) => {});
  }, []);

  const [dataSource, setDataSource] = useState<Item[]>([]);

  useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: "https://unsplash.it/400/400?image=" + (i + 1),
      };
    });
    setDataSource(items);
  }, []);
  return (
    <>
      <SafeAreaView style={tw`bg-[#0f0e0f] ios:mt-8 h-full w-full`}>
        <StatusBar backgroundColor={"#0f0e0f"} />
        <View style={tw`mt-5 flex flex-row px-2`}>
          <TouchableOpacity onPress={(e) => {}}>
            <View
              style={tw`rounded-full bg-[#1f1f1d] p-2 flex justify-center items-center `}
            >
              <Ionicons name="chevron-back" size={24} color="gray" />
            </View>
          </TouchableOpacity>
          <View style={tw`ml-6`}>
            <Text style={tw`text-gray-200 text-3xl font-bold`}>
              {" "}
              Explore Prompts{" "}
            </Text>
          </View>
        </View>

        <View
          style={tw`mt-2 flex flex-row flex-wrap items-center justify-center`}
        >
          <FlatList
            numColumns={2}
            data={dataSource}
            renderItem={(item: Item) => {
              return (
                <View style={tw`h-52 w-36 ios:w-42 flex m-4`}>
                  <Image
                    source={require("../assets/images/ai-image.jpeg")}
                    style={tw.style(`rounded-2xl h-full w-full`, {
                      resizeMode: "cover",
                    })}
                  />
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
