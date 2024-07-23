import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ErrorView = () => {
  return (
    <View>
      <Text style={styles.error}>Se produjo un error, intentalo de nuevo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    color: 'black',
  },
});
