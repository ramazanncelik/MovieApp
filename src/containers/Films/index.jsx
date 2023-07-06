import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FilmCard from '../../components/FilmCard';

const Films = ({ title,films }) => {

    const renderItem = ({ item }) => (
        <React.Fragment>
            <FilmCard filmInfo={item} />
        </React.Fragment>
    );

    const renderSeparator = () => (
        <View style={{ width: 10 }} />
    );

    return (
        <View className="w-full h-max flex flex-col space-y-2">
            <Text className="w-full text-lg text-black font-bold">{title}</Text>

            {films &&
                <FlatList
                    data={films}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    ItemSeparatorComponent={renderSeparator}
                />
                ||
                <Text className="w-full p-3 bg-blue-100 text-blue-700">
                    Bu kategoride film bulunamadı
                </Text>}

        </View>
    )
}

export default Films