import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBj1-JJeEoJLwYpIEXEOjvF-1Z6DHkupjo',
  authDomain: 'serviceapp-b95f9.firebaseapp.com',
  databaseURL: 'https://serviceapp-b95f9-default-rtdb.firebaseio.com',
  projectId: 'serviceapp-b95f9',
  storageBucket: 'serviceapp-b95f9.appspot.com',
  messagingSenderId: '634733488189',
  appId: '1:634733488189:web:c026847aeb2514e44a2254',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Profile',
          color: '#F7CAC9',
          image: 'https://img.icons8.com/color/70/000000/name.png',
        },
        {
          id: 2,
          title: 'About',
          color: '#87CEEB',
          image: 'https://img.icons8.com/office/70/000000/home-page.png',
        },
        {
          id: 3,
          title: 'Transport',
          color: '#4682B4',
          image: 'https://img.icons8.com/bubbles/50/000000/car.png',
        },
        {
          id: 4,
          title: 'Service',
          color: '#91A8D0',
          image: 'https://img.icons8.com/color/48/000000/maintenance.png',
        },
        {
          id: 5,
          title: 'Bill',
          color: '#A660A2',
          image: 'https://img.icons8.com/dusk/64/null/tip.png',
        },
        {
          id: 6,
          title: 'Logout',
          color: '#91A8D0',
          image: 'https://img.icons8.com/arcade/64/null/exit.png',
        },
      ],
    };
  }

  clickEventListener(item) {
    this.props.navigation.navigate(item.title);
    if (item.title == 'Logout') {
      try {
        firebase.auth().signOut();

        this.props.navigation.navigate('SignIn');
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity
                  style={[styles.card, {backgroundColor: item.color}]}
                  onPress={() => {
                    this.clickEventListener(item);
                  }}>
                  <Image style={styles.cardImage} source={{uri: item.image}} />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[styles.title, {color: item.color}]}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  listContainer: {
    alignItems: 'center',
  },
  /******** card **************/
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    flex: 1,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
