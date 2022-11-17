import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Card from './src/components/Card';
import {getTasks} from './src/services/tasksClient';

const App = () => {
  const [nome, setNome] = useState('REACT NATIVE');
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const taskList = await getTasks();
    setTasks(taskList);
  };

  useEffect(() => {
    fetchData();
  }, [nome]);

  return (
    <View style={styles.container}>
      {/* { DATA.map( item => <Text key={item.id} style={styles.texto}>{item.title}</Text>) } */}
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={Card}
        // renderItem={({item}) => (
        //   <>
        //     <Text style={styles.texto}>{item.titulo}</Text>
        //     <Button title='DELETAR' onPress={() => setNome(nome   "a")}/>
        //   </>
        // )}
      />
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },
  texto: {
    color: '#fff',
  },
});

export default App;
