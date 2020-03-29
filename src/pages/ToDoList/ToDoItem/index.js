import React, {useCallback} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import withObservables from '@nozbe/with-observables';

Icon.loadFont();

import styles from './styles';

function ToDoItem({todo}) {
  const handleToggleCheck = useCallback(async () => {
    await todo.toggleCheck();
  }, [todo]);

  const handleDelete = useCallback(async () => {
    await todo.delete();
  }, [todo]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleCheck} style={styles.checkButton}>
        <View
          style={[
            styles.borderIcon,
            {borderColor: todo.done ? '#00adb5' : '#c9d6df'},
          ]}>
          {todo.done && <Icon name="check" color="#00adb5" size={30} />}
        </View>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {todo.title}
        </Text>

        <Text numberOfLines={2} style={styles.description}>
          {todo.description}
        </Text>
      </View>

      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Icon name="trash" color="#ea5455" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const enhance = withObservables(['todo'], ({todo}) => ({
  todo,
}));

export default enhance(ToDoItem);
