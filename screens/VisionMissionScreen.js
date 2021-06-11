import {View} from 'native-base';
import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{height: '50%', width: '100%'}}
        source={require('../assets/vision.png')}
      />
      <View style={styles.line}></View>
      <Image
        style={{height: '50%', width: '100%'}}
        source={require('../assets/mission.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '98%',
    padding: 5,
  },
  line: {
    height: 5,
    width: '100%',
  },
});
