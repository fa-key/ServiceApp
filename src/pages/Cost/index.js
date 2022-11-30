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

export default function Cost({navigation, route}) {
  const {id, nama} = route.params;
  const [keyUser, setKey] = useState(id);
  const [dfullname, setfullname] = useState(nama);
  const [harga, setharga] = React.useState('first');

  const InsertData = () => {
    this.url = 'http://192.168.1.13:7070/apic/api.php';
    if (dfullname == '') {
      alert('Isi Dengan Lengkap');
    } else {
      var urlAksi = this.url + '/?op=createCost&id='+keyUser;
      fetch(urlAksi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'idUser=' + keyUser + '&nama=' + dfullname + '&harga=' + harga,
      })
        .then(response => response.json())
        .then(json => {
          this.setState({nama: ''});
          this.setState({harga: ''});
          this.getListData();
        });
      alert('Data Cost Dimasukkan');
      navigation.navigate('Front');
    }
  };

  return (
    <View style={style.container}>
      <View style={style.posTitle}>
        <Text style={style.title}>Service Cost</Text>
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
        <Text style={style.label}>Repair</Text>
        <RadioButton.Group
          onValueChange={value => setharga(value)}
          value={harga}>
          <View style={style.radio}>
            <RadioButton value="50000"/>
            <Text style={style.radio}>Ganti Oli</Text>
          </View>
          <View style={style.radio}>
            <RadioButton value="150000" />
            <Text style={style.radio}>Full Service</Text>
          </View>
        </RadioButton.Group>
      </View>
      </View>
      <View style={style.posButton}>
        <TouchableOpacity style={style.button} onPress={() => InsertData()}>
          <Text style={style.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

