import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";


const bookCover = require('@/assets/images/galaxy.png');

export default function LockerScreen() {
  return (
    <View style={styles.container}>
          <Image source={bookCover} style={styles.image} />
      <Text style={styles.text}>Hooray!</Text>
      <Text style={styles.text}>
        You use the key to open a secret exit. you then realize the exit leads to outer space and you escape into it. 
        {"\n\n"}
        congratulations, you have successfully escaped the adventure and are now free to explore the universe. You have made the right choice and have proven to be a smart adventurer. Enjoy your new found freedom!

        
       
       
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efda1c',
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