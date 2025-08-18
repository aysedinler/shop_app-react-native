import React from 'react'
import LottieView from 'lottie-react-native'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'


function Error() {
    return (
      <View style={styles.container}>
          <LottieView style={style.animation} source={require("../../../assets/Error animation.json")} autoPlay></LottieView>
      </View>

    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
animation:{
    flex:1,
}

})
export default Error