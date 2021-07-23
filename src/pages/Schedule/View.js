import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Text, Overlay, Image, Avatar} from 'react-native-elements';
import Buttons from '../../components/Button';

import {viewStyle as styles} from './Style';

const ViewSchedule = ({visibility, item, navigation, onPress}) => {
  const arrivedOnSite = () => {
    if (item.typeId === 1) {
      navigation.navigate('Cash');
    } else {
      navigation.navigate('Camera', {siteType: 1});
    }
    onPress(false);
  };

  return (
    <Overlay
      isVisible={visibility}
      onBackdropPress={() => onPress(false)}
      overlayStyle={styles.overlay}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitleType}>{item.type}</Text>
        <Text style={styles.headerTitle}>{item.title}</Text>
        <Text style={styles.headerTime}>{item.time}</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://statik.tempo.co/data/2019/01/23/id_813830/813830_720.jpg',
          }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.body}>
          <View style={styles.avatar}>
            <Avatar
              size="small"
              rounded
              title={item.id}
              containerStyle={{backgroundColor: item.color}}
            />
          </View>
          <View style={styles.bodyContent}>
            {item.typeId === 1 ? (
              <>
                <Text style={styles.bodyText}>
                  You were drinking before your shift. Please call Adrian on
                  0123456789.
                </Text>
                <Text style={styles.bodyText}>
                  Go to site ‘X’ pick up banking
                </Text>
              </>
            ) : (
              <Text style={styles.bodyText}>
                Check lane way entrance, Check Woolworths staff entrance in lane
                way, Meet bakers at middle entrance for staff escort. Include 1x
                patrol lap around entire complex.
              </Text>
            )}
          </View>
        </View>
        <Buttons
          title="Arrived on site"
          onPress={arrivedOnSite}
          containerStyle={styles.buttonArrived}
        />
      </View>
    </Overlay>
  );
};

export default ViewSchedule;
