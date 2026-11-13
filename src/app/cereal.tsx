import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";



export default function LockerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Uh oh!</Text>
      <Text style={styles.text}>
        You decide to eat the mystery cereal, although your gut tells you not to. You start to feel sick, and you suddenly turn into a cheerio 
        {"\n\n"}
       next time, listen to your gut! You have been turned into a cheerio, and you are now part of the cereal bowl. You will never be able to leave this cereal bowl, and you will be eaten by someone else.
        
       
       
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d6a69',
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