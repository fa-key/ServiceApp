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
import {dataRef} from '../../config/FIREBASE';

export default function Transport({navigation, route}) {
  const {fullname, merek, mesin, rerata} = route.params ?? {
    fullname: 'Belum terisi',
    merek: 'Belum terisi',
    mesin: 'Belum terisi',
    rerata: 'Belum terisi',
    date: 'Belum Terisi',
  };
  const [dfullname, setDfullname] = useState([]);

  useEffect(() => {
    const dataFocus = navigation.addListener('focus', () => {
      const listener = dataRef.on('value', snapshot => {
        let data = snapshot.val();
        let dfullname = Object.values(data);
        setDfullname(dfullname);
      });
    });
  });
  const sendData = item => {
    navigation.navigate('MyStack', {
      screen: 'Edit',
      params: {
        key: item.key,
        fullname: item.fullname,
        merek: item.merek,
        mesin: item.mesin,
        rerata: item.rerata,
        date: item.date,
      },
    });
  };
  const hapusData = item => {
    dataRef.child(item.key).remove();
    navigation.navigate('Transport');
  };
  return (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
    <Text style={styles.companyName}>Profile</Text>
      <FlatList
        style={styles.notificationList}
        data={dfullname}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          return (
            <View style={styles.notificationBox}>
              <Text style={styles.name}>
                {item.fullname}
              </Text>
              <TouchableOpacity style={styles.btnColor}>
              <Text style={styles.name}>
                {item.merek}
              </Text>
              </TouchableOpacity> 
              
              <View style={styles.icons}>
                <TouchableOpacity onPress={() => hapusData(item)}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: 'https://img.icons8.com/color/48/000000/filled-trash.png',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendData(item)}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: 'https://img.icons8.com/bubbles/50/000000/edit.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
        
          );
        }}
      />
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7CAC9',
    height:800
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    margin: 10,
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'center',

  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    height: null,
    marginTop: 5,
    flexDirection: 'column',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#404241',
    marginLeft: 10,
    alignSelf: 'center',
  },
  companyName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#91A8D0',
    textAlign:'center',
    marginTop: 15
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: '#8e9e93',
    marginTop: 5,
  }
});
