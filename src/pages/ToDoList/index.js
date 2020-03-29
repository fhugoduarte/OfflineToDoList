import React, {useCallback, useState} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

Icon.loadFont();

import ListItems from './ListItems';
import styles from './styles';

function ToDoList({todos, navigation}) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleNewToDo = useCallback(() => {
    navigation.navigate('NewToDo');
  }, [navigation]);

  const handleTogglePending = useCallback(() => {
    if (filter === 'all') {
      setFilter('done');
    } else {
      setFilter('all');
    }
  }, [filter]);

  const handleToggleDone = useCallback(() => {
    if (filter === 'all') {
      setFilter('pending');
    } else {
      setFilter('all');
    }
  }, [filter]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#777"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={handleTogglePending}
          style={[
            styles.filterButton,
            {
              backgroundColor: filter === 'done' ? 'transparent' : '#0d7377',
              marginRight: 10,
            },
          ]}>
          <Text style={styles.filterText}>Pending</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleToggleDone}
          style={[
            styles.filterButton,
            {
              backgroundColor: filter === 'pending' ? 'transparent' : '#0d7377',
            },
          ]}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>

      <ListItems search={search} filter={filter} />

      <TouchableOpacity onPress={handleNewToDo} style={styles.newToDoButton}>
        <Icon name="plus" size={35} color="#323232" />
      </TouchableOpacity>
    </View>
  );
}

export default ToDoList;
