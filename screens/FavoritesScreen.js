import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    // const { ids, addFavorite, removeFavorite } = favoriteMealsCtx;
    const ids = useSelector((state) => state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter((mealItem) => {
        return ids.indexOf(mealItem.id) >= 0;
    });

    if(ids.length === 0) return (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>아직까지 즐겨찾기한 식당이 없어요.</Text>
        </View>
    )
    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
});