import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

import defaultStyles from '../config/styles'
import AppText from './AppText'

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
            <AppText style={styles.titleText}>{title}</AppText>
            <AppText style={styles.descText}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        height: '45%',
        overflow: 'hidden',
        backgroundColor: defaultStyles.colors.white,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: '70%',
    },
    detailsContainer: {
        padding: 15,
    },
    titleText: {
        fontSize: 22,
        marginBottom: 10,
    },
    descText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: defaultStyles.colors.primary,
    }
})
