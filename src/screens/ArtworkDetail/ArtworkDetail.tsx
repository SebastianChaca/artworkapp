import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DetailRouteProps} from '../../Main';
import {useRoute} from '@react-navigation/native';
import {ArtworkDetailProvider} from '../../components/ArtworkDetails/context/ArtworDetailProvider';
import {
  DetailDimensions,
  DetailImage,
  DetailsDescription,
  DetailsSummary,
} from '../../components/ArtworkDetails';

export const ArtworkDetail = () => {
  const {params} = useRoute<DetailRouteProps>();
  const {artwork} = params;

  return (
    <ScrollView>
      <ArtworkDetailProvider artwork={artwork}>
        <View style={styles.container}>
          <DetailImage />
          <DetailDimensions />
          <DetailsSummary />
          <DetailsDescription />
        </View>
      </ArtworkDetailProvider>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
});
