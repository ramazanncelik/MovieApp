import { SafeAreaView, TouchableOpacity, ScrollView, View, Text } from 'react-native'
import React from 'react'
import IconII from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'

const FilmDetails = ({ route }) => {

  const { filmInfo } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView className="w-full h-full flex items-center justify-center p-2 opacity-90 bg-black">
      <View className="w-[85%] h-[85%] bg-white rounded-lg p-2">
        <ScrollView className="w-full h-full flex flex-col space-y-2">
          <TouchableOpacity onPress={() => navigation.goBack()} className="w-max h-max flex flex-row space-x-2 items-center">
            <IconII name="arrow-back" size={24} color="black" />
            <Text className="flex flex-1 h-max text-sm text-black font-bold">
              {filmInfo.title}
            </Text>
          </TouchableOpacity>

          <View className="w-full h-max flex items-center justify-center">
            <FastImage
              className="w-64 h-96"
              source={{
                uri: `https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <Text className="w-full flex flex-row text-black">
            <Text className="font-bold text-black">Oy Sayısı: </Text> {filmInfo.vote_count && filmInfo.vote_count || "Oy sayısı bulunamadı"}
          </Text>

          <Text className="w-full flex flex-row text-black">
            <Text className="font-bold text-black">Oy Ortalaması: </Text> {filmInfo.vote_average && filmInfo.vote_average || "Oy Ortalaması bulunamadı"}
          </Text>

          <Text className="w-full text-black">
            {filmInfo.overview && filmInfo.overview || "Açıklama bulunamadı"}
          </Text>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default FilmDetails