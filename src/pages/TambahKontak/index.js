import React, {Component, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {dataRef} from '../../config/FIREBASE';

export default function TambahKontak({navigation, route}) {
  const [nama, setnama] = useState('');
  const [nomor, setnomor] = useState('');
  const [alamat, setalamat] = useState('');

  const submit = () => {
    let newData = {
      nama: nama,
      nomor: nomor,
      alamat: alamat,
    };
    const ref = dataRef.push(newData);
    const key = ref.key;
    dataRef.child(key).update({key: key});
    navigation.navigate('Home');
  };
  return (
    <View style={styles.pages}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.textInput}
        label="Name"
        placeholder="Input name ..."
        onChangeText={value => setnama(value)}
        value={nama}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.textInput}
        label="Phone Number"
        placeholder="Input phone number ..."
        keyboardType="number-pad"
        onChangeText={value => setnomor(value)}
        value={nomor}
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.textInput}
        label="Alamat"
        placeholder="Input address ..."
        isTextArea={true}
        onChangeText={value => setalamat(value)}
        value={alamat}
      />

      <TouchableOpacity style={styles.btnSubmit} onPress={() => submit()}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  btnSubmit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    color: 'grey',
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    color: 'grey',
    marginBottom: 10,
  },
});
