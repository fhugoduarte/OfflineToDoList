import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDatabase} from '@nozbe/watermelondb/hooks';

import styles from './styles';

function NewToDo() {
  const navigation = useNavigation();
  const database = useDatabase();

  const descriptionRef = useRef(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleRegister() {
    await database.action(async () => {
      const todos = database.collections.get('todos');

      return await todos.create((todo) => {
        todo.title = title;
        todo.description = description;
        todo.done = false;
      });
    });

    Keyboard.dismiss();
    navigation.goBack();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}>
        <Text style={styles.grayText}>
          Register a new <Text style={styles.greenText}>To Do</Text> and
          organize your tasks
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Title"
            placeholderTextColor="#777"
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={() => descriptionRef.current.focus()}
            style={styles.input}
          />

          <TextInput
            ref={descriptionRef}
            placeholder="Description"
            placeholderTextColor="#777"
            value={description}
            onChangeText={setDescription}
            onSubmitEditing={handleRegister}
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton}>
          <Text style={styles.registerButtonTitle}>Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default NewToDo;
