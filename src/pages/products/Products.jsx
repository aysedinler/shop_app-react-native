
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import { API_URL } from '@env'; // ⬅️ buradan alıyoruz
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';

export default function Products({ navigation }) {
    const { loading, error, products } = useFetch(API_URL)
    const handleProductSelect = id => {
        navigation.navigate("DetailPAge", { id })
    }
    const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />;
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }


    return (
        <View>
            <Text>Products (API_URL: {API_URL})</Text>
            <FlatList
                data={products}
                keyExtractor={(item, idx) => String(item.id ?? idx)}
                renderItem={renderProduct}
            />
        </View>
    );
}
