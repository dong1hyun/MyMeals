import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const { ids, addFavorite, removeFavorite } = favoriteMealsCtx;

    const id = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === id);
    const mealIsFavorite = ids.includes(id);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                    onPress={changeFavoriteStatusHandler}
                />
            }
        })
    }, [navigation, changeFavoriteStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle style={styles.subtitle}>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle style={styles.subtitle}>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    },
});