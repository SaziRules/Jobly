import { Link } from "expo-router";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView>
            <TouchableOpacity className="flex-1 p-5 bg-white rounded-lg mx-5 mt-5">
              <Text className="font-JakartaBold text-lg text-[#1e1e1e]">Create your Resume</Text>
              <Text className="font-JakartaLight text-sm text-[#9b9a9a] mt-[-5]">Your very own professional Resume.</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <Text className="font-JakartaBold text-lg text-[#1e1e1e]">Post a job</Text>
              <Text className="font-JakartaLight text-sm text-[#9b9a9a] mt-[-5]">Let's make your next great hire happen.</Text>
            </TouchableOpacity>
            </ScrollView>    
        
    </SafeAreaView>
    );  
};

export default Create;