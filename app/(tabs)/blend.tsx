import { View, Text } from "react-native";
import tw from "twrnc";

const Blend = () => {
  return <View style={tw`bg-[#0f0e0f] ios:mt-8 h-full w-full px-3`}>
    <Text style={tw`text-gray-200 text-3xl font-bold p-2`}>Blend</Text>
    <Text style={tw`text-gray-200 Pt-2`}>Blend your photos with AI</Text>
  </View>;
};

export default Blend;