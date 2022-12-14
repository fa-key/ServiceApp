import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {style} from './style';

export class Transport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      merek: '',
      tanggal: '',
      rerata: '',
      listData: [],
      idEdit: null,
    };
    this.url = 'http://192.168.1.13:7070/apic/api.php';
  }
  componentDidMount() {
    this.getListData();
  }
  async getListData() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('hasil yang didapat:' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  async klikDelete(id) {
    await fetch(this.url + '/?op=delete&id=' + id)
      .then(response => response.json())
      .then(json => {
        alert('Data Berhasil Dihapus');
        this.getListData();
      })
      .catch(error => {
        console.log(error);
      });
  }

  async sendData(val) {
    this.props.navigation.navigate('MyStack', {
      screen: 'Edit',
      params: {
        id: val.id,
        nama: val.nama,
        merek: val.merek,
        mesin: val.mesin,
        tanggal: val.tanggal,
        rerata: val.rerata,
      },
    });
  }

  async sendNama(val) {
    this.props.navigation.navigate('Biaya', {
      screen: 'Cost',
      params: {
        id: val.id,
        nama: val.nama,
      },
    });
  }

  render() {
    return (
      <ScrollView style={style.scrollContainer}>
        <View style={style.container}>
          <Text style={style.companyName}>Profile</Text>
          <View style={style.notificationList}>
            {this.state.listData.map((val, index) => (
              <View style={style.notificationList} key={index}>
                <View style={style.notificationBox}>
                  <Text style={style.name}>{val.nama}</Text>
                  <TouchableOpacity style={style.btnColor}>
                    <Text style={style.name}>{val.merek}</Text>
                  </TouchableOpacity>

                  <View style={style.icons}>
                    <TouchableOpacity onPress={() => this.klikDelete(val.id)}>
                      <Image
                        style={style.icon}
                        source={{
                          uri: 'https://img.icons8.com/color/48/000000/filled-trash.png',
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.sendData(val)}>
                      <Image
                        style={style.icon}
                        source={{
                          uri: 'https://img.icons8.com/bubbles/50/000000/edit.png',
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.sendNama(val)}>
                      <Image
                        style={style.icon}
                        source={{
                          uri: 'https://img.icons8.com/plasticine/100/null/invoice-1.png',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Transport;
