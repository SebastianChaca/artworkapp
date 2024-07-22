import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getStoredIds} from '../../utils/storeData';

export const Favorites = () => {
  useEffect(() => {
    const fetchStoredIds = async () => {
      const storedIds = await getStoredIds();
      console.log(storedIds);
    };

    fetchStoredIds();
  }, []);
  return (
    <View>
      <Text>Fav</Text>
    </View>
  );
};
