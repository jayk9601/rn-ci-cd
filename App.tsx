import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  const [message, setMessage] = useState('');
  const getFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFCMToken();
  }, []);
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
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
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
