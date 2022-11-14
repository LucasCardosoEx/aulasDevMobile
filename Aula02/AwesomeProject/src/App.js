import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {Gatinho} from './components/Gatinho';
import {styles} from './styles';

export default function App() {
  const handlePress = () => {
    console.log('Press');
    alert('Pressionado');
  };
  return (
    <View style={styles.container}>
      {/* <Image
        source={{URL: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 50, height: 50}}
      /> */}
      {/* <Image
      // source={require('./assets/tiny_logo.png')}
      // style={{width: 50, height: 50}}
      /> */}
      <Text style={styles.texto}>Hello World!!</Text>
      <Gatinho nome="Fubá" />
      <Text style={styles.texto}>Input: {nome}</Text>
      <Text style={styles.texto}>{isTrue ? 'É Verdadeiro' : 'É Falso'}</Text>
      <TextInput
        style={{backgroundColor: '#fff', marginBottom: 20, width: '80%'}}
        placeholder="Digite o nome do Gatinho"
        onChangeText={setNome}
        value={nome}
      />
      <Button onPress={handlePress} title="clique aqui" color="#215491" />
      <TouchableOpacity onPress={() => handlePress()} style={styles.botao}>
        <Text style={styles.texto}>Touchable Opacity</Text>
      </TouchableOpacity>
    </View>
  );
}
