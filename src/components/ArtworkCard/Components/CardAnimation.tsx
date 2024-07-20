import React, {useEffect, useRef, PropsWithChildren} from 'react';
import {Animated} from 'react-native';

export const CardAnimation = ({
  index,
  children,
}: PropsWithChildren<{index: number}>) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: 450 * (index % 3) + 1,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);
  return <Animated.View style={{opacity}}>{children}</Animated.View>;
};
