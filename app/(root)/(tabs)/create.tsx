import { icons } from "@/constants";
import { Link } from "expo-router";
import { Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";

const Create = () => {
  const { user } = useUser();
    return (
      <ScrollView>
        <SafeAreaView className="flex-1">
            
            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-5">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Create your resume</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">Your very own professional resume.</Text>
              </View>
              <View>
                <Text className=" text-2xl text-[#1e1e1e] font-JakartaLight">+</Text>
              </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Post a job</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">Let's make your next great hire happen.</Text>
              </View>
              <View>
                <Text className=" text-2xl text-[#1e1e1e] font-JakartaLight">+</Text>
              </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Browse Candidates</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">Find the best candidate for your next hire.</Text>
              </View>
              <View>
              <Image source={icons.search} className="h-[20px] w-[20px]" />
              </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Browse Companies</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">Let's make your next great hire happen.</Text>
              </View>
              <View>
                <Image source={icons.search} className="h-[20px] w-[20px]" />
              </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Privacy Policy</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">How we collect and safely use your data.</Text>
              </View>
              <View>
                <Image source={icons.to} className="h-[20px] w-[20px]" />
              </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Terms</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">Terms of service for job seekers & empl..</Text>
              </View>
              <View>
                <Image source={icons.to} className="h-[20px] w-[20px]" />
              </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex p-5 bg-white rounded-lg mx-5 mt-3">
              <View className="flex flex-row items-center justify-between">
              <View>
              <Text className="font-JakartaBold text-[16px] text-[#1e1e1e]">Sign Out</Text>
              <Text className="font-JakartaExtraLight text-sm text-[#9b9a9a] mt-[-5]">{user?.emailAddresses[0].emailAddress}</Text>
              </View>
              <View>
                <Image source={icons.out} className="h-[20px] w-[20px]" />
              </View>
              </View>
            </TouchableOpacity>    
    </SafeAreaView>
    </ScrollView> 
    );  
};

export default Create;