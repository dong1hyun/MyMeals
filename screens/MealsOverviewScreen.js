import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const id = route.params.categoryId;

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === id).title
        navigation.setOptions({
            title: categoryTitle
        });
    }, [id, navigation])


    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(id) >= 0;
    });

    function renderMealItem(itemData) {
        return (
            <MealItem mealData={itemData.item} />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});