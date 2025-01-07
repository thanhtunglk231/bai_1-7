import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NotificationScreen from './NotificationScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NotificationScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
