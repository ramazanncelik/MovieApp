import { SafeAreaView, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import { observer, useLocalObservable } from 'mobx-react'
import filmsStore from '../../store/filmsStore'
import Films from '../../containers/Films'

const Home = observer(() => {

  const { nowPlayingFilms, popularFilms, topRatedFilms, upComingFilms, getFilms } = useLocalObservable(() => filmsStore);

  useEffect(() => {
    getFilms();
  }, [])


  return (
    <SafeAreaView className="h-screen">
      <ScrollView className="w-full h-full flex flex-col space-y-5 bg-white p-2">
        <View className="w-full">
          <Films
            title={"Now Playing"}
            films={nowPlayingFilms} />
        </View>

        <View className="w-full">
          <Films
            title={"Popular"}
            films={popularFilms} />
        </View>

        <View className="w-full">
          <Films
            title={"Top Rated"}
            films={topRatedFilms} />
        </View>

        <View className="w-full mb-5">
          <Films
            title={"Up Coming"}
            films={upComingFilms} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
});

export default Home