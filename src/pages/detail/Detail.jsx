import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch/useFetch'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'

function Detail({ route }) {
  const { id } = route.params
  // const { loading, error, products } = useFetch(`${API_URL}/${id}`)
  const { loading, error, products } = useFetch(`https://fakestoreapi.com/products/${id}`)

  console.log(id);
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: products.image }} style={styles.image} />
      <Text style={styles.title} > {products.title}</Text>
      <Text style={styles.desc} > {products.description}</Text>
      <Text style={styles.price} > {products.price} TL</Text>

    </View>
  )
}

export default Detail