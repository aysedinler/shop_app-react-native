
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import { API_URL } from '@env'; // ⬅️ buradan alıyoruz
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

export default function Products() {
    const { loading, error, products } = useFetch(API_URL)
    const renderProduct = ({ item }) => <ProductCard product={item} />;
    if (loading) {
        return <ActivityIndicator size="large" />
    }
    if (error) {
        return <Text>{error}</Text>
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
