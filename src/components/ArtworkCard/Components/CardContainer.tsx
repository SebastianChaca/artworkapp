import React, {PropsWithChildren} from 'react';

import {StyleSheet, View} from 'react-native';

export const CardContainer = ({children}: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
