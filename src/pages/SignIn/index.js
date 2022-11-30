import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useHistory, Link} from 'react-router-dom';
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

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  SignUp = (email, password) => {
    try {
      if (this.state.password < 6) {
        alert('Masukkan minimal 6 Karakter');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };

  SignIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user);
          this.props.navigation.navigate('Front');
        });
    } catch (error) {
      alert('Email dan Password Tidak Sesuai');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-services-automotive-dealership-flaticons-flat-flat-icons.png',
            }}
          />
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={email => this.setState({email})}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.SignIn(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.SignUp(this.state.email, this.state.password)}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7CAC9',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#AC8989',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    backgroundColor: '#AC8989',
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent',
  },
  loginButton: {
    backgroundColor: '#863030',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  posTitle: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9F5050',
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
});
