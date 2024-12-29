import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface NumberInputProps {
  index: number;
  value: string;
  onChangeText: (text: string, index: number) => void;
}

export default function NumberInput({ index, value, onChangeText }: NumberInputProps){
  const [isFocus, setFocus] = useState(false);

  return (
    <View style={[styles.container, isFocus && styles.focus]}>
      <TextInput
        style={[styles.text,{ outlineStyle: 'none' } as any]}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        maxLength={1}
        value={value}
        onChangeText={(text) => onChangeText(text,index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderColor: '#3A6D8C',
    borderWidth: 4,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins_700Bold',
    fontSize: 40,
    width: 64,
    height: '100%',
    textAlign: 'center',
    fontWeight: "bold",
  },
  focus: {
    borderColor: "#00B01A",
  },
});