import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";



export default function LockerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blue Door</Text>
      <Text style={styles.text}>
        You step through the blue door and a ghost hands you a golden key. 
        {"\n\n"}
        Do you take the key, or do you leave it alone and run away?
        
        {"\n\n"}
       Choose wisely, as your choice will determine your fate in this adventure.
      </Text><Link href="/nokey" style={styles.button}> Leave the key alone and run away!</Link>
      <Link href="/key" style={styles.button}> Take the key</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3427f2',
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