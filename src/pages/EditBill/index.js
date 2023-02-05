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
import {style} from './style';

export default function EditBill({navigation, route}) {
  const {id, nama, harga} = route.params;
  const [keyUbah, setKey] = useState(id);
  const [dfullname, setfullname] = useState(nama);
  const [dharga, setharga] = useState(harga);

  const ubahData = keyUbah => {
    this.url = 'http://1.192.168.13:7070/apic/api.php';
    var urlAksi = this.url + '/?op=updateCost&id=' + keyUbah;
    fetch(urlAksi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'nama=' + dfullname + '&harga=' + dharga,
    })
      .then(response => response.json())
      .then(json => {
        this.setState({nama: ''});
        this.setState({harga: ''});
        this.getListData();
      });
    alert('Data Berhasil Diubah')
    navigation.navigate('Front');
  };

  return (
    <View style={style.container}>
      <View style={style.posTitle}>
        <Text style={style.title}>Update Repair</Text>
      </View>
      <View style={style.contInput}>

        <View style={style.posInput}>
          <Text style={style.label}>Name</Text>
          <TextInput
            style={style.input}
            onChangeText={value => setfullname(value)}
            value={dfullname}
          />
        </View>
        <View style={style.posInput}>
        <View style={style.inputContainerrad}>
        <Text style={style.label}>Repair</Text>
          <RadioButton.Group
            onValueChange={value => setharga(value)}
            value={dharga}>
            <View style={style.radio}>
              <RadioButton value="50000" />
              <Text style={style.radio}>Ganti Oli</Text>
            </View>
            <View style={style.radio}>
              <RadioButton value="150000" />
              <Text style={style.radio}>Full Service</Text>
            </View>
          </RadioButton.Group>
        </View>
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

