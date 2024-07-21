import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
