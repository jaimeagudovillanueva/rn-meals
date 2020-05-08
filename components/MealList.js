import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', { 
                        mealId: itemData.item.id
                    });
                }}
            />
        );
    }

    return (
        <View style={styles.listContainer}>
            <FlatList data={props.listData} renderItem={renderMealItem} style={styles.list} />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
    }
});

export default MealList;