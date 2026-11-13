import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>You wake up in a strange, glowing room. Two doors stand in front of you. 
        {"\n\n"}
       Which door do you open? The red door, or the blue door?
        {"\n\n"}
        Choose wisely, as your choice will determine your fate in this adventure.
        </Text>
      <Link href="/redstart" style={styles.button}> Open the red door</Link>

      <Link href="/bluestart" style={styles.button}> Open the blue door</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
});