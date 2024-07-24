import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ onLoginPress }) => {
  return (
    <View style={styles.view1}>
      <ImageBackground
        style={styles.image}
        source={{ uri: 'https://wallpaperaccess.com/full/1076709.jpg'}}
      >
        <View>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    minHeight: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  view1: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontFamily:"Times New Roman",
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  loginButton: {
    width: 100, 
    height: 50, 
    backgroundColor: '#644117', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, 
  },
  loginButtonText: {
    fontFamily:"Times New Roman",
    color: 'white',
    fontSize: 30,
  },
});