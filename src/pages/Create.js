import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {TextInput, Button, StyleSheet, View} from 'react-native';

import {add} from '../redux/example/example.action';

const CreatePostScreen = ({navigation, route}) => {
  const [postText, setPostText] = useState('');

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(add(postText));
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={style.input}
        value={postText}
        onChangeText={setPostText}
      />
      <Button title="Done" onPress={submit} />
    </View>
  );
};

export default CreatePostScreen;

const style = StyleSheet.create({
  input: {
    height: 200,
    padding: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
});
