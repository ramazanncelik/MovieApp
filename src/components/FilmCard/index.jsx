import { TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FilmCard = ({ filmInfo }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("FilmDetails", {
                filmInfo: filmInfo
            })
        }} className="w-32 h-48 rounded-lg">
            <FastImage
                className="w-full h-full rounded-lg"
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${filmInfo.poster_path}`,
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        </TouchableOpacity>
    )
}

export default FilmCard