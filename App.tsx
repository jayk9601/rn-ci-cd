import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
const App = () => {
  const [message, setMessage] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="Hello to the tester"
        onPress={() => {
          setTimeout(() => {
            setMessage('Hello Tester');
          }, Math.floor(Math.random() * 200));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: 'Arial',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 10,
  },
});
export default App;
