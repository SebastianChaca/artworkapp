import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export const Loader = ({isLoading}: {isLoading: boolean}) => {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return null;
};
