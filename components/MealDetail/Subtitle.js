import { StyleSheet, Text } from "react-native";

function Subtitle({children}) {
    return (
        <Text style={styles.subtitle}>{children}</Text>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    }
});