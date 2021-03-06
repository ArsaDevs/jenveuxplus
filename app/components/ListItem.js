import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import defaultStyles from '../config/styles'
import AppText from './AppText'

export default function ListItem({title, subTitle, IconComponent, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={defaultStyles.colors.primarylight} onPress={onPress}>
            <View style={styles.listContainer}>
                    {IconComponent}
                    {image && <Image
                    style={styles.image}
                    source={image}
                    />}
                    <View style={styles.descContainer}>
                        <AppText style={styles.descHead}>{title}</AppText>
                        {subTitle && <AppText style={styles.descSub}>{subTitle}</AppText>}
                    </View>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        borderRadius: 35,
        width: 70,
        height: 70,
    },
    descContainer: {
        marginLeft: 10,
        alignItems: 'center',
    },
    descHead: {
        color: defaultStyles.colors.white,
        fontSize: 20,
        fontWeight: '500',
    },
    descSub: {
        color: defaultStyles.colors.white2,
        fontSize: 15,
    }
})
