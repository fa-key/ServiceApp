import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {dataRef} from '../../config/FIREBASE';
import {RadioButton} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Edit({navigation, route}) {
  const {key, fullname, mesin, merek, rerata, date} = route.params;
  const [keyUbah, setKey] = useState(key);
  const [dfullname, setfullname] = useState(fullname);
  const [dmesin, setValue] = useState(mesin);
  const [dmerek, setmerek] = useState(merek);
  const [drerata, setrerata] = useState(rerata);
  const [ddate, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState(date);
  const [ddatee, setdate] = useState(date);
  const ubahData = keyUbah => {
    dataRef.child(keyUbah).update({
      fullname: dfullname,
      mesin: dmesin,
      merek: dmerek,
      rerata: drerata,
      date: text,
    });
    navigation.navigate('Transport');
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
    <View>
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Update Profile</Text>
        </View>
        <View style={styles.contInput}>
          <View style={styles.posInput}>
          <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#ffffff"
              onChangeText={value => setfullname(value)}
              value={dfullname}
            />
          </View>
          <View style={styles.posInput}>
          <Text style={styles.label}>Brand</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#ffffff"
              onChangeText={value => setmerek(value)}
              value={dmerek}
            />
          </View>
          <View style={styles.posInput}>
          <Text style={styles.label}>Machine</Text>
            <RadioButton.Group
              onValueChange={value => setValue(value)}
              value={dmesin}>
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
          <View style={styles.posInput}>
          <Text style={styles.label}>Daily Usage(km)</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="number-pad"
              label="Rerata"
              onChangeText={value => setrerata(value)}
              value={drerata}
            />
          </View>
          <View style={styles.posInput}>
          <Text style={styles.label}>Last Service</Text>
            <TouchableOpacity style={styles.radio} onPress={() => showMode('date')}>
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://img.icons8.com/office/30/000000/calendar.png',
                }}
              />
              <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginLeft: 10,
                flexDirection:'row'
              }}>
              {text}
            </Text>
            </TouchableOpacity>
            
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={ddate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>

        <View style={styles.posButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => ubahData(keyUbah)}>
            <Text style={styles.textButton}>Ubah</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView1}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  posTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066ff',
  },
  contInput: {
    backgroundColor: '#0066ff',
    margin: 20,
    padding: 5,
    borderRadius: 15,
  },
  posInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#0066ff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    backgroundColor: '#0066ff',
  },
  posButton: {
    margin: 20,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    width: 180,
    height: 30,
    alignItems: 'center',
    backgroundColor: '#ccffff',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: '#0066ff',
  },
  buttonView1: {
    marginLeft: 20,
    marginRight: 20,
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    fontWeight:'bold'
  },
  radio: {
    color: 'white',
    flexDirection: 'row',
  }
});
