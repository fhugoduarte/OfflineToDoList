import React, {useCallback} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Icon from 'react-native-vector-icons/Entypo';

Icon.loadFont();

import ToDoItem from './ToDoItem';
import styles from './styles';

function ToDoList({todos, navigation}) {
  const handleNewToDo = useCallback(() => {
    navigation.navigate('NewToDo');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={({item: todo}) => <ToDoItem todo={todo} />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        contentContainerStyle={styles.toDoListContainer}
        style={styles.toDoList}
      />

      <TouchableOpacity onPress={handleNewToDo} style={styles.newToDoButton}>
        <Icon name="plus" size={35} color="#323232" />
      </TouchableOpacity>
    </View>
  );
}

const enhance = withObservables(['todos'], ({database}) => ({
  todos: database.collections.get('todos').query(),
}));

export default withDatabase(enhance(ToDoList));
