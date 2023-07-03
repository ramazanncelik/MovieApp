import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import React from 'react'
import NowPlayingFilms from '../../containers/NowPlayingFilms'
import PopularFilms from '../../containers/PopularFilms'
import TopRatedFilms from '../../containers/TopRatedFilms'
import UpComingFilms from '../../containers/UpComingFilms'

const Home = () => {
  return (
    <SafeAreaView className="h-screen">
      <ScrollView className="w-full h-full flex flex-col space-y-5 bg-white p-2">
        <View className="w-full">
          <NowPlayingFilms />
        </View>

        <View className="w-full">
          <PopularFilms />
        </View>

        <View className="w-full">
          <TopRatedFilms />
        </View>

        <View className="w-full mb-5">
          <UpComingFilms />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home