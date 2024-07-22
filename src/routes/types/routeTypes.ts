import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Artwork} from '../../api/types/ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Details: {artwork: Artwork; title: string};
  Favorites: undefined;
};
//TODO:mover esto
export type HomeProps = BottomTabScreenProps<RootStackParamList, 'Home'>;
export type HomeRouteProps = HomeProps['route'];
export type HomeNavigationProps = HomeProps['navigation'];
export type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
export type DetailRouteProps = DetailProps['route'];
