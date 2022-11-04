import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {dataRef} from '../../config/FIREBASE';
import moment from 'moment';
import 'moment/locale/id';
import {Alert} from '@coreui/coreui';
import {loadOptions} from '@babel/core';
export default function Detail({navigation, route}) {
  const {key, fullname, mesin, merek, rerata, date} = route.params;
  const [keyUbah, setKey] = useState(key);
  const [dfullname, setfullname] = useState(fullname);
  const [dmesin, setValue] = useState(mesin);
  const [dmerek, setmerek] = useState(merek);
  const [drerata, setrerata] = useState(rerata);
  const [ddate, setDate] = useState(new Date());
  const [text, setText] = useState(date);

  if (rerata <= 13) {
    ket = 'masih sehat';
  } else {
    ket = 'servis bro';
  }

  const dString = text;
  const days = 30;
  let [day, month, year] = dString.split('/');
  // month - 1 as month in the Date constructor is zero indexed

  const now = new Date(year, month - 1, day);
  let loopDay = now;
  const loopDays = new Array();
  for (let i = 0; i <= days; i++) {
    loopDay.setDate(loopDay.getDate() + 6);
    console.log('Day: ' + loopDay);
  }
  loopDays.push(loopDay);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />
            <Text style={styles.name}>{dfullname}</Text>
          </View>
        </View>

        <View style={styles.body}>
        <View style={styles.contain}>
        <Text style={styles.title}>Motor Brand</Text>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://img.icons8.com/external-filled-outline-icons-maxicons/85/000000/external-motor-transport-filled-outline-filled-outline-icons-maxicons.png',
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{dmerek}</Text>
            </View>
          </View>
        <Text style={styles.title}>Machine</Text>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://img.icons8.com/office/30/000000/gears.png',
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{dmesin}</Text>
            </View>
          </View>
        <Text style={styles.title}>Daily Usage in a day</Text>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://img.icons8.com/office/80/000000/scales.png',
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{drerata} km</Text>
            </View>
          </View>
        <Text style={styles.title}>Last Service</Text>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://img.icons8.com/office/30/000000/calendar.png',
                }}
              />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>{text}</Text>
              
            </View>
          </View>
        <Text style={styles.title}>Condition</Text>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://img.icons8.com/color/96/000000/warning-shield.png',
                }}
              />
            </View>
            <View style={styles.infoContent}>
            <Text style={styles.info}>{ket}</Text>
            </View>
          </View>
        <Text style={styles.title}>Next Service Schedule</Text>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image
                style={styles.icon}
                source={{
                  uri: 'https://img.icons8.com/stickers/100/000000/timetable.png',
                }}
              />
            </View>
            <View style={styles.infoContent}>
            <View >
                {loopDays.map(day => {
                  return <Text style={styles.info}>{day.toLocaleDateString()}</Text>;
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#778899',
    height: 500,
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontWeight:'bold',
    marginBottom: -10,
    marginTop:5,
    marginLeft:130
  },
  contain:{
    paddingTop: 15
  }
});
