import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}> {backgroundColor.toUpperCase()} </Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]} onPress={() => setBackgroundColor('blue')}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'brown' }]} onPress={() => setBackgroundColor('brown')}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => setBackgroundColor('yellow')}>
        <Text style={styles.buttonText}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => setBackgroundColor('red')}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]} onPress={() => setBackgroundColor('black')}>
        <Text style={[styles.buttonText, { color: 'white' }]}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    width: 200,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorChanger;
