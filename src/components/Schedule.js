/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Icon, Text, Overlay, Image, Avatar} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonComponent from '../components/Button';

const {width} = Dimensions.get('screen');

export default function ScheduleComponent(props) {
  const {openList, navigation, setVisible} = props;

  const arrivedOnSite = () => {
    if (openList && openList.typeId === 1) {
      navigation.navigate('Cash');
    } else {
      navigation.navigate('Camera', {siteType: 1});
    }
    setVisible(false);
  };

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'orange',
          padding: 20,
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 10, fontFamily: 'Montserrat', color: 'white'}}>
          {openList && openList.type}
        </Text>
        <Text style={{fontSize: 24, fontFamily: 'Bebas Neue', color: 'white'}}>
          {openList && openList.title}
        </Text>
        <Text style={{fontSize: 12, fontFamily: 'Montserrat', color: 'white'}}>
          {openList && openList.time}
        </Text>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={{
            uri:
              'https://statik.tempo.co/data/2019/01/23/id_813830/813830_720.jpg',
          }}
          style={{width: 220, height: 200}}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View
            style={{
              flex: 0.2,
            }}>
            <Avatar
              size="small"
              rounded
              title="1"
              containerStyle={{backgroundColor: '#ABC873'}}
            />
          </View>
          <View
            style={{
              flex: 0.8,
            }}>
            {openList && openList.typeId === 1 ? (
              <>
                <Text
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: 12,
                    maxWidth: width / 2,
                  }}>
                  You were drinking before your shift. Please call Adrian on
                  0123456789.
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat',
                    fontSize: 12,
                    maxWidth: width / 2,
                    marginTop: 10,
                  }}>
                  Go to site ‘X’ pick up banking
                </Text>
              </>
            ) : (
              <Text
                style={{
                  fontFamily: 'Montserrat',
                  fontSize: 12,
                  maxWidth: width / 2,
                }}>
                Check lane way entrance, Check Woolworths staff entrance in lane
                way, Meet bakers at middle entrance for staff escort. Include 1x
                patrol lap around entire complex.
              </Text>
            )}
          </View>
        </View>
        <ButtonComponent
          title="Arrived on site"
          onPress={arrivedOnSite}
          containerStyle={{width: wp('30%'), marginTop: hp('5%')}}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 0.9,
  },
  footer: {
    flex: 0.13,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
  },
});
