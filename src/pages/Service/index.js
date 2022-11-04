import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import {dataRef} from '../../config/FIREBASE';

export default function Service({navigation, route}) {
  const {fullname, merek, mesin, rerata,date} = route.params ?? {
    fullname: 'Belum terisi',
    merek: 'Belum terisi',
    mesin: 'Belum terisi',
    rerata: 'Belum terisi',
    date: 'Belum terisi'
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
    navigation.navigate('MyDrawer', {
      screen: 'Detail',
      params: {
        key: item.key,
        fullname: item.fullname,
        merek: item.merek,
        mesin: item.mesin,
        rerata: item.rerata,
        date:item.date
      },
    });
  };
  

  const tagClickEventListener = item => {
    Alert.alert(item);
  };



  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={dfullname}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          
          return (
            <TouchableOpacity
              style={[styles.card, {borderColor: '#87CEEB'}]}
              onPress={() => {
                sendData(item);
              }}>
              <View style={styles.cardContent}>
                <Image
                  style={[styles.image, styles.imageContent]}
                  source={{
                    uri: 'https://img.icons8.com/color/96/000000/guest-male--v1.png',
                  }}
                />
                <Text style={styles.name}>{item.fullname}</Text>
              </View>
              <View style={[styles.cardContent, styles.tagsContent]}>
              <TouchableOpacity style={styles.btnColor} onPress={() => {tagClickEventListener(item.merek)}}>
                <Text>{item.merek}</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.btnColor} onPress={() => {tagClickEventListener(tag)}}>
                <Text>{item.mesin}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnColor} onPress={() => {tagClickEventListener(tag)}}>
                <Text>{item.date}</Text>
              </TouchableOpacity>  
              <TouchableOpacity style={styles.btnColor} onPress={() => {tagClickEventListener(tag)}}>
                <Text>{item.rerata}</Text>
              </TouchableOpacity> 
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
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
    alignItems: 'center',
    flex: 1,
    margin: 10,
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
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -10,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center',
    color:"#383b38"
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: 'grey',
    marginTop: 5,
  },
});
