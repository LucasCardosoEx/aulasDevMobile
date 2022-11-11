import React from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Gatinho} from '../components/Gatinho';
import {styles} from './styles';

export default function App() {
  const handlePress = () => {
    console.log('Press');
    alert('Pressionado');
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.conteiner}>
        <Text style={styles.texto}>Hello, world!</Text>
        <Gatinho nome="Fubá" />
        <Button onPress={handlePress} title="Clique Aqui" />
        <TouchableOpacity
          onPress={() => {
            handlePress();
          }}
          style={styles.botao}>
          <Text style="texto">Touchable</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
