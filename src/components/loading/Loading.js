import LottieView from 'lottie-react-native'
import React from 'react'

function Loading() {
    return (
        <LottieView source={require("../../../assets/Loading 40 _ Paperplane.json")} autoPlay></LottieView>
    )
}

export default Loading