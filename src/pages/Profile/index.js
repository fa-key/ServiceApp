import React, {Component, useState, setState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {RadioButton} from 'react-native-paper';
import {dataRef} from '../../config/FIREBASE';

export default function Profile({navigation, route}) {
  const [mesin, setValue] = React.useState('first');
  const [fullname, setfullname] = useState('Input your name...');
  const [merek, setmerek] = useState("Input your motor's brand..");
  const [rerata, setrerata] = useState('daily distant usage(a day)');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('your last service');

  const onClickListener = () => {
    let newInput = {
      fullname: fullname,
      merek: merek,
      rerata: rerata,
      mesin: mesin,
      date: text
    };
    const ref = dataRef.push(newInput);
    const key = ref.key;
    dataRef.child(key).update({key: key});
    navigation.navigate('Front');
  };

  const onChange = (event, selectedDate) => {
    setShow(!show);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();

    setText(fDate);

    console.log(fDate);

    if (Platform.OS !== 'ios') {
      setShow(false); /* Or whatever you're using to set the state to false*/
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>Profile</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/bubbles/50/000000/user.png'}}
        />
        <TextInput
          style={styles.inputs}
          label="Name"
          underlineColorAndroid="transparent"
          onChangeText={value => setfullname(value)}
          value={fullname}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/external-filled-outline-icons-maxicons/85/000000/external-motor-transport-filled-outline-filled-outline-icons-maxicons.png'}}
        />
        <TextInput
          style={styles.inputs}
          label="Merek"
          onChangeText={value => setmerek(value)}
          value={merek}
        />
      </View>

      <View style={styles.inputContainerrad}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/office/30/000000/gears.png'}}
        />
        <RadioButton.Group
          onValueChange={value => setValue(value)}
          value={mesin}>
          <View style={styles.radio}>
            <RadioButton value="matic" />
            <Text style={styles.radio}>Matic</Text>
          </View>
          <View style={styles.radio}>
            <RadioButton value="manual" />
            <Text style={styles.radio}>Manual</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => showMode('date')}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://img.icons8.com/office/30/000000/calendar.png',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: 'grey',
            marginLeft: 10,
          }}>
          {text}
        </Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://img.icons8.com/office/80/000000/scales.png'}}
        />
        <TextInput
          style={styles.inputs}
          keyboardType="number-pad"
          underlineColorAndroid="transparent"
          onChangeText={value => setrerata(value)}
          value={rerata}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={() => onClickListener()}>
        <Text style={styles.signUpText}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7CAC9',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    color: 'grey',
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#91A8D0',
  },
  signUpText: {
    color: 'white',
  },
  companyName: {
    fontSize: 32,
    fontWeight: '600',
    color: '#91A8D0',
    marginBottom: 10,
  },
  inputContainerrad: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 95,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    color: 'black',
    flexDirection: 'row',
  },
  inputdate: {
    width: 250,
    height: 30,
    color: 'black',
  },
  inputContainerDate: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    marginRight: 180,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePickerStyle: {
    width: 230,
  },
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});
