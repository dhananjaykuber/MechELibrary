import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

export default function SubElementsScreen({route, navigation}) {
  const [subElements, setSubElements] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    firestore()
      .collection('Elements')
      .doc(route.params.id)
      .collection('SubElements')
      .orderBy('name')
      .onSnapshot(snapshot =>
        setSubElements(
          snapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data()?.name,
            link: doc.data()?.link,
          })),
        ),
      );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.elementsWrapper}>
        <Text style={styles.sectionTitle}>Mech E-Library</Text>
        <Text style={styles.elementTitle}>{route.params.name}</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.searchElement}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="black"
            placeholder="Search here"
            style={styles.input}
            value={searchString}
            onChangeText={string => setSearchString(string)}
          />
        </KeyboardAvoidingView>

        <ScrollView style={styles.elements}>
          {subElements
            .filter(element =>
              element.name.toLowerCase().includes(searchString.toLowerCase()),
            )
            .map(element => (
              <TouchableOpacity
                style={styles.item}
                key={element.id}
                onPress={() => {
                  Linking.openURL(element.link);
                }}>
                <View style={styles.itemLeft}>
                  <View style={styles.square}>
                    {route.params.name === 'Animations' ? (
                      <Image
                        style={styles.logo}
                        source={require('../assets/video.png')}
                      />
                    ) : (
                      <Image
                        style={styles.logo}
                        source={require('../assets/file.png')}
                      />
                    )}
                  </View>
                  <Text style={styles.itemText}>{element?.name}</Text>
                </View>
                <View style={styles.circular}></View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  elementsWrapper: {
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fdfdfd',
    textAlign: 'center',
    backgroundColor: '#3E4993',
    padding: 7,
    marginHorizontal: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  elementTitle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#3E4993',
    color: '#fdfdfd',
    marginHorizontal: 20,
    borderRadius: 7,
  },
  elements: {
    height: '78%',
    backgroundColor: '#fdfdfd',
    marginTop: 0,
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
    borderColor: '#3E4993',
    borderWidth: 2,
    marginHorizontal: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#3E4993',
    padding: 3,
    borderRadius: 5,
    marginRight: 15,
  },
  logo: {
    width: 18,
    height: 18,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#3E4993',
    borderWidth: 2,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  searchElement: {
    paddingTop: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    padding: 2,
    paddingHorizontal: 15,
    marginBottom: 11,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    color: 'black',
  },
});
