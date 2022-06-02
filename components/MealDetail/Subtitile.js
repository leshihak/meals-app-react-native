import { Text, View, StyleSheet } from "react-native";

const Subtitle = ({ children }) => (
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
);

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#f8a36d",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginHorizontal: 4,
    borderBottomColor: "#f8a36d",
    borderBottomWidth: 2,
  },
});
