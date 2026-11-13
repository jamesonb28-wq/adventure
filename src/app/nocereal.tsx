import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";



export default function LockerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hooray!</Text>
      <Text style={styles.text}>
        You decide to not eat the mystery cereal, turn around, and walk out.  
        {"\n\n"}
        Way to listen to your gut! You are a smart adventurer, and you have made the right choice. You safely find your way back home.
        
       
       
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ead815',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,

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