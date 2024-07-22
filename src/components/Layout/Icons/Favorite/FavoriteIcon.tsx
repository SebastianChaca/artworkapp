import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FavoriteIcon = ({
  onPress,
  name,
  size,
}: {
  onPress?: () => void;
  name: string;
  size?: number;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Icon name={name} size={size} color={'#940909'} />
      </View>
    </Pressable>
  );
};
