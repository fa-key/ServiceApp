import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {style} from './style';

export default function Edit({navigation, route}) {
  const {id, nama, mesin, merek, rerata, tanggal} = route.params;
  const [keyUbah, setKey] = useState(id);
  const [dfullname, setfullname] = useState(nama);
  const [dmesin, setValue] = useState(mesin);
  const [dmerek, setmerek] = useState(merek);
  const [drerata, setrerata] = useState(rerata);
  const [ddate, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState(tanggal);
  const [ddatee, setdate] = useState(tanggal);
  const ubahData = keyUbah => {
    this.url = 'http://192.168.1.13:7070/apic/api.php';
    var urlAksi = this.url + '/?op=update&id=' + keyUbah;
    fetch(urlAksi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'nama=' +
        dfullname +
        '&merek=' +
        dmerek +
        '&mesin=' +
        dmesin +
        '&tanggal=' +
        text +
        '&rerata=' +
        drerata,
    })
      .then(response => response.json())
      .then(json => {
        this.setState({nama: ''});
        this.setState({merek: ''});
        this.setState({mesin: ''});
        this.setState({tanggal: ''});
        this.setState({rerata: ''});
        this.getListData();
      });
    alert('Data Berhasil Diubah')
    navigation.navigate('Front');
  };

  const onChange = (event, selectedDate) => {
    setShow(!show);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getDate();
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
    <View style={style.container}>
      <View style={style.posTitle}>
        <Text style={style.title}>Update Profile</Text>
      </View>
      <View style={style.contInput}>
        <View style={style.posInput}>
          <Text style={style.label}>Name</Text>
          <TextInput
            style={style.input}
            value={dfullname}
            onChangeText={value => setfullname(value)}
          />
        </View>
        <View style={style.posInput}>
          <Text style={style.label}>Brand</Text>
          <TextInput
            style={style.input}
            placeholderTextColor="#ffffff"
            onChangeText={value => setmerek(value)}
            value={dmerek}
          />
        </View>
        <View style={style.posInput}>
          <Text style={style.label}>Machine</Text>
          <RadioButton.Group
            onValueChange={value => setValue(value)}
            value={dmesin}>
            <View style={style.radio}>
              <RadioButton value="matic" />
              <Text style={style.radio}>Matic</Text>
            </View>
            <View style={style.radio}>
              <RadioButton value="manual" />
              <Text style={style.radio}>Manual</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={style.posInput}>
          <Text style={style.label}>Daily Usage(km)</Text>
          <TextInput
            style={style.input}
            keyboardType="number-pad"
            label="Rerata"
            onChangeText={value => setrerata(value)}
            value={drerata}
          />
        </View>
        <View style={style.posInput}>
          <Text style={style.label}>Last Service</Text>
          <TouchableOpacity
            style={style.radio}
            onPress={() => showMode('date')}>
            <Image
              style={style.inputIcon}
              source={{
                uri: 'https://img.icons8.com/office/30/000000/calendar.png',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginLeft: 10,
                flexDirection: 'row',
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

      <View style={style.posButton}>
        <TouchableOpacity
          style={style.button}
          onPress={() => ubahData(keyUbah)}>
          <Text style={style.textButton}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
