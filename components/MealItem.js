import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";

function MealItem({ mealData }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: mealData.id
        });
    };
    return (
        <View style={styles.container}>
            <Pressable
                onPress={selectMealItemHandler}
                android_ripple={{ color: '#ccc' }}
                style={({pressed}) => (pressed && styles.pressed)}
            >
                <View style={styles.innerContainer}>
                    <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>
                        {mealData.title}
                    </Text>
                    <MealDetails duration={mealData.duration} affordability={mealData.affordability} complexity={mealData.affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 36,
        backgroundColor: 'white'
    },
    innerContainer: {
        alignItems: 'center',
        gap: 12,
        paddingBottom: 12,
        borderRadius: 36,

    },
    pressed: {
        opacity: 0.25
    },
    image: {
        width: deviceWidth,
        height: deviceWidth,
        borderRadius: 20,
        elevation: 8,
    },
    title: {
        fontSize: 20,
        color: 'red',
    },
    ingredients: {
        fontSize: 12,
        padding: 2,
        borderRadius: 8,
        backgroundColor: 'white',
        textAlign: 'center'
    }
});