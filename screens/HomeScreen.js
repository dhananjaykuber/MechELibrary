import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {Button} from 'native-base';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>Mech E-Library</Text>
        <Button
          style={styles.visionMissionButton}
          onPress={() => navigation.navigate('VisionMissionScreen')}>
          <Text style={styles.btnText}>ME Vision & Missions</Text>
        </Button>

        <Button
          style={styles.takeMeInButton}
          onPress={() => navigation.navigate('ElementsScreen')}>
          <Text style={styles.btnText}>TAKE ME IN</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfdfd',
    height: Dimensions.get('window').height,
    display: 'flex', // flex
    // center
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBody: {
    marginTop: 75,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 80,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  logo: {
    width: 294,
    height: 277,
    marginLeft: 10,
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 42,
    marginTop: 0,
    color: '#3E4993',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  appText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 42,
    marginTop: 10,
    color: '#fdfdfd',
    fontWeight: 'bold',
    backgroundColor: '#3E4993',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    paddingLeft: 11,
    paddingRight: 11,
  },
  visionMissionButton: {
    width: 240,
    height: 40,
    borderRadius: 200,
    backgroundColor: '#FE7F9C',
    marginTop: 15,
    marginLeft: 35,
    marginBottom: 20,
    textAlign: 'center',
  },
  takeMeInButton: {
    width: 240,
    height: 45,
    borderRadius: 200,
    backgroundColor: '#3E4993',
    marginLeft: 35,
    marginBottom: 60,
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 240,
  },
});
