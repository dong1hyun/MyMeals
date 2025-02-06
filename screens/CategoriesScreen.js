import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
    function pressHandler(itemData) {
        navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id
        });
    }
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
                return (
                    <CategoryGridTile
                        title={itemData.item.title}
                        color={itemData.item.color}
                        onPress={() => pressHandler(itemData)}
                    />
                )
            }}
            numColumns={2}
        />
    )
}

export default CategoriesScreen;