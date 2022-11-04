import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  onClickListener = () => {
    this.props.navigation.navigate('Transport');
  };

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-tire-racing-flaticons-lineal-color-flat-icons-9.png',
            }}
          />
          <Text style={styles.companyName}>Putri Service Motor</Text>
          <Text style={styles.slogan}>Melayani Anda Dengan Sepenuh Hati</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
              toko suku cadang otomotif roda dua dengan layanan utama Servis
              Rutin 5.000KM, oli X-Ten yang Tahan Lama dan ban motor sebagai
              produk dagang utamanya. Putri Service Motor dengan total lebih
              dari 900 toko, melayani servis dan penggantian oli dengan oli
              X-Ten yang Tahan Lama untuk segala jenis dan tipe sepeda motor.
              Hadirnya oli X-Ten yang Tahan Lama di Putri Service Motor membuat
              mesin menjadi bersih, nyaman dan bebas overhear sehingga lebih
              stabil untuk berkendara. Tersedia juga sparepart sesuai standar
              pabrikan untuk berbagai spesifikasi motor. Untuk sejumlah produk
              ban unggulan, Anda bisa berbelanja ban motor langsung di toko kami
              dengan mendatangi lokasi toko Putri Service Motor terdekat di kota
              Anda.
            </Text>
          </View>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.sendButton]}
            onPress={() => this.onClickListener()}>
            <Text style={styles.buttonText}>About You</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#91A8D0',
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  companyName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0e1e2b',
  },
  slogan: {
    fontSize: 18,
    fontWeight: '600',
    color: '#03045e',
    marginTop: 10,
  },
  descriptionContent: {
    padding: 30,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFFFF',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 30,
  },
  sendButton: {
    backgroundColor: '#F7CAC9',
    width: 150,
  },
  buttonText: {
    color: '#0e1e2b',
  },
});
