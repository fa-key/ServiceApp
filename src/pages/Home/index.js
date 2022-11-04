import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component, useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {dataRef} from '../../config/FIREBASE';

export default function Home({navigation, route}) {
  const {fullname, merek, rerata} = route.params ?? {
    fullname: 'Belum terisi',
    merek: 'Belum terisi',
    rerata: 'Belum terisi',
  };
  const [dfullname, setDfullname] = useState([]);

  useEffect(() => {
    const dataFocus = navigation.addListener('focus', () => {
      const listener = dataRef.on('value', snapshot => {
        let data = snapshot.val();
        let dfullname = Object.values(data);
        setDfullname(dfullname);
      });
    });
  });
  const sendData = item => {
    navigation.navigate('Profile'),
      {
        screen: 'Edit',
        params: {key: item.key, fullname: item.fullname},
      };
  };
  const submit = () => {
    navigation.navigate('TambahKontak');
  };
  return (
    <View style={styles.page}>
      <Text style={styles.text}> Halaman Home Running;</Text>
      <FlatList
        data={dfullname}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return <Text style={styles.text}> {item.fullname} </Text>;
        }}
      />
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.btnPlus} onPress={() => submit()}>
          <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,
  },
  btnPlus: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
