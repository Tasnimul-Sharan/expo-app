import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    )
}

export default Loading