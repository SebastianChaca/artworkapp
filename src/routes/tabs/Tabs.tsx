import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../types/routeTypes';
import {Artworklist, Favorites} from '../../screens';
import {FavoriteIcon} from '../../components/Layout/Icons/Favorite/FavoriteIcon';
import Icon from 'react-native-vector-icons/FontAwesome';

function Favorite() {
  return <FavoriteIcon name="heart" size={15} />;
}

function Home() {
  return <Icon name="home" size={20} />;
}

export function Tabs() {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={Artworklist}
        options={{
          title: 'Art Institute of Chicago',
          tabBarLabel: 'Home',
          tabBarIcon: Home,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: Favorite,
        }}
      />
    </Tab.Navigator>
  );
}
