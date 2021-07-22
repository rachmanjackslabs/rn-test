/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Button, Image} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CheckpointScreen({navigation}) {
  const cameraState = useSelector(state => state.camera);

  const [site, setSite] = useState(cameraState.data.siteType.toString());

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.bodyBottom}>
          <View style={{padding: 20}}>
            <RNPickerSelect
              placeholder={{label: 'Site Check & Secure', value: ''}}
              onValueChange={value => setSite(value)}
              value={site}
              items={[
                {label: 'Site Unsecure', value: '1'},
                {label: 'Maintenance', value: '2'},
                {label: 'Staff Escort', value: '3'},
                {label: 'Emergency', value: '4'},
                {label: 'Suspicious Activity', value: '5'},
                {label: 'Welfare Check', value: '6'},
                {label: 'First Aid', value: '7'},
                {label: 'Other', value: '8'},
              ]}
              useNativeAndroidPickerStyle={false}
              style={{
                inputIOSContainer: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#AAAAAA',
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 50,
                },
                inputIOS: {
                  fontFamily: 'Montserrat',
                  color: '#AAAAAA',
                  fontSize: 24,
                },
                placeholder: {
                  color: '#AAAAAA',
                  fontFamily: 'Montserrat',
                },
                inputAndroidContainer: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#AAAAAA',
                  borderWidth: 1,
                  height: 50,
                  borderRadius: 50,
                },
                inputAndroid: {
                  fontFamily: 'Montserrat',
                  color: '#AAAAAA',
                  fontSize: 24,
                },
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            {cameraState.images.map(data => {
              if (data.siteType.toString() === site) {
                return (
                  <Image
                    source={{
                      uri: data.dataImage.uri,
                    }}
                    style={{width: wp('90%'), height: hp('50%')}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                );
              }
            })}
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}>
            <Button
              buttonStyle={styles.startButton}
              titleStyle={styles.startButtonText}
              title="NEXT"
              containerStyle={styles.startButtonContainer}
              icon={{
                name: 'chevron-right',
                size: 15,
                color: '#AAAAAA',
              }}
              iconRight={true}
              onPress={() =>
                navigation.navigate('Camera', {siteType: parseInt(site)})
              }
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.footer}>
        <Button
          buttonStyle={styles.completeButton}
          titleStyle={styles.completeButtonText}
          title="COMPLETED CHECK AT THIS SITE"
          containerStyle={styles.completeButtonContainer}
          icon={{
            name: 'chevron-right',
            size: 15,
            color: 'white',
          }}
          iconRight={true}
          onPress={() => {
            navigation.navigate('Schedule');
          }}
        />
      </TouchableOpacity>
    </View>
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
  bodyTop: {
    flex: 0.35,
    backgroundColor: '#edb66d',
    alignItems: 'center',
    padding: 20,
  },
  bodyBottom: {
    flex: 0.65,
  },
  contentHeader: {
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  h2header: {
    color: 'white',
    fontFamily: 'BebasNeue',
  },
  headerBodyText: {
    color: 'white',
    fontFamily: 'Playfair Display',
    marginTop: 10,
    fontSize: 17,
  },
  startButton: {
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  startButtonContainer: {
    width: '20%',
    marginTop: '5%',
  },
  startButtonText: {
    color: '#AAAAAA',
    fontFamily: 'Bebas Neue',
  },
  callButton: {
    borderRadius: 20,
    backgroundColor: '#ED9923',
  },
  callButtonContainer: {
    width: '50%',
    marginTop: '5%',
  },
  callButtonText: {
    color: 'white',
    fontFamily: 'BebasNeue',
  },
  completeButton: {
    borderRadius: 20,
    backgroundColor: '#ED9923',
  },
  completeButtonContainer: {
    width: '80%',
    marginTop: '5%',
  },
  completeButtonText: {
    color: 'white',
    fontFamily: 'Bebas Neue',
  },
});
