import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

const InputData = ({label, placeholder, keyboardType, isTextArea, value}) => {
  if (isTextArea) {
    return (
      <>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.textInputArea}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
        />
      </>
    );
  }
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
      />
    </>
  );
};
export default InputData;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    color: 'grey',
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    color: 'grey',
    marginBottom: 10,
  },
});
