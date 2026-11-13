import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";



export default function LockerScreen() {
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Uh oh!</Text>
            <Text style={styles.text}>
                You decide to run away but you trip over a banana peel and fall into a scary pit. You are now stuck in the pit and cannot get out.
                {"\n\n"}
                You will have to wait for someone to come and rescue you, or you will be stuck in the pit forever.




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
        padding: 10,

    },
    text: {
        color: '#fff',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 18,

    },
});