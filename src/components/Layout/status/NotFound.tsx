import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const NotFound = ({text}: {text: string}) => {
  return (
    <View>
      <Text style={styles.notFound}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notFound: {
    color: 'white',
  },
});
