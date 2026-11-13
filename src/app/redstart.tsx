import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";



export default function LockerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Red Door</Text>
      <Text style={styles.text}>
        You step through the red door and find a giant bowl of cereal. 
        {"\n\n"}
        Do you eat the cereal, or do you leave it alone and go back?
        
        {"\n\n"}
       Choose wisely, as your choice will determine your fate in this adventure.
      </Text><Link href="/nocereal" style={styles.button}> Leave the cereal alone</Link>
      <Link href="/cereal" style={styles.button}> Eat the cereal</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f22727',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,

  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
  text: {
    color: '#fff',
    padding: 20,
  },  
  image: {
    width:200,
    height: 200,
    borderRadius: 18,
    
  },
});