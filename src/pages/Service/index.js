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

export class Service extends Component {
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
    this.props.navigation.navigate('MyDrawer', {
      screen: 'Detail',
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

  render() {
    return (
      <ScrollView style={style.scrollContainer}>
        <View style={style.container}>
          <Text style={style.companyName}>Customer</Text>
          <View style={style.notificationList}>
            {this.state.listData.map((val, index) => (
              <View style={style.notificationBox} key={index}>
                <TouchableOpacity
                  style={[style.card, {borderColor: '#87CEEB'}]}
                  onPress={() => this.sendData(val)}>
                  <View style={style.cardContent}>
                    <Image
                      style={[style.image, style.imageContent]}
                      source={{
                        uri: 'https://img.icons8.com/color/96/000000/guest-male--v1.png',
                      }}
                    />
                    <Text style={style.name}>{val.nama}</Text>
                  </View>
                  <View style={[style.cardContent, style.tagsContent]}>
                    <TouchableOpacity
                      style={style.btnColor}
                      onPress={() => {
                        tagClickEventListener(val.merek);
                      }}>
                      <Text>{val.merek}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.btnColor}
                      onPress={() => {
                        tagClickEventListener(tag);
                      }}>
                      <Text>{val.mesin}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.btnColor}
                      onPress={() => {
                        tagClickEventListener(tag);
                      }}>
                      <Text>{val.tanggal}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={style.btnColor}
                      onPress={() => {
                        tagClickEventListener(tag);
                      }}>
                      <Text>{val.rerata}</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Service;
