import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/maphoto.png'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/maphoto.png'),
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/maphoto.png'),
    }
]

export default function MessagesScreen() {
    return (
        <FlatList 
        style={styles.flatList}
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => <ListItem title={item.title} subTitle={item.description} image={item.image} />}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: colors.primary,
    },
})