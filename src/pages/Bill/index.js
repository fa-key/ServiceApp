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

export class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      harga: '',
      listData: [],
    };
    this.url = 'http://192.168.1.13:7070/apic/api.php/?op=readCost';
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

  async klikDeleteCost(id) {
    await fetch('http://192.168.1.13:7070/apic/api.php/?op=deleteCost&id=' + id)
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
    this.props.navigation.navigate('Update', {
      screen: 'EditBill',
      params: {
        id: val.id,
        nama: val.nama,
        harga: val.harga,
      },
    });
  }

  render() {
    return (
      <ScrollView style={style.scrollContainer}>
        <View style={style.container}>
          <Text style={style.companyName}>Service Cost</Text>
          <View style={style.notificationList}>
            {this.state.listData.map((val, index) => (
              <View style={style.notificationList} key={index}>
                <View style={style.notificationBox}>
                  <Text style={style.name}>{val.nama}</Text>
                  <TouchableOpacity style={style.btnColor}>
                    <Text style={style.name}>{val.harga}</Text>
                  </TouchableOpacity>
                  <View style={style.icons}>
                    <TouchableOpacity
                      onPress={() => this.klikDeleteCost(val.id)}>
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

export default Bill;
