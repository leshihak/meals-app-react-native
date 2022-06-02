import { Text, View, StyleSheet } from "react-native";

const List = ({ data }) =>
  data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#f8a36d",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
