import React, {PropsWithChildren} from 'react';

import {Pressable, StyleSheet, View} from 'react-native';
interface CardContainerProps {
  onPress: () => void;
}

export const CardContainer = ({
  children,
  onPress,
}: PropsWithChildren<CardContainerProps>) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>{children}</View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
