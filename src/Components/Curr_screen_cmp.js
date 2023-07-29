import React from 'react'
import { SafeAreaView, Text} from 'react-native'

const Curr_screen_cpm = (props) => {
    const { msg0, msg1, containerS, msg0S, msg1S } = props
    return (
        <SafeAreaView style={containerS}>
            <Text style={msg0S}>
                {msg0}
            </Text>
            <Text style={msg1S}>
                {msg1}
            </Text>
        </SafeAreaView>
    )
}

export default Curr_screen_cpm