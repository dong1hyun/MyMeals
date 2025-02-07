import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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

    return (
        <MealsList items={displayedMeals} />
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});