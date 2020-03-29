import React from 'react';
import {View, FlatList} from 'react-native';
import withObservables from '@nozbe/with-observables';
import {Q} from '@nozbe/watermelondb';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';

import ToDoItem from './ToDoItem';

import styles from './styles';

function ListItems({todos}) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={({item: todo}) => <ToDoItem todo={todo} />}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      contentContainerStyle={styles.toDoListContainer}
      showsVerticalScrollIndicator={false}
      style={styles.toDoList}
    />
  );
}

const enhance = withObservables(
  ['todos', 'search', 'filter'],
  ({database, search, filter}) => ({
    todos: database.collections
      .get('todos')
      .query(
        Q.where('title', Q.like(`%${Q.sanitizeLikeString(search)}%`)),
        Q.where(
          'done',
          filter === 'all' ? Q.oneOf([true, false]) : filter === 'done',
        ),
      ),
  }),
);

export default withDatabase(enhance(ListItems));
