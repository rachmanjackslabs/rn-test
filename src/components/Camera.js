/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Text, Icon, Image} from 'react-native-elements';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {useDispatch} from 'react-redux';
import {takeImage} from '../redux/camera/camera.action';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function TakePictureScreen({initialProps, route, navigation}) {
  const [
    {cameraRef, type, ratio, autoFocus, autoFocusPoint},
    {takePicture},
  ] = useCamera(initialProps);

  const [dataImage, setDataImage] = useState(null);

  const {siteType} = route.params;

  const dispatch = useDispatch();

  const takePictures = async () => {
    try {
      const data = await takePicture();
      setDataImage(data);
    } catch (e) {
      console.tron.log({e});
    }
  };

  const takeNextImage = () => {
    const data = {
      dataImage,
      siteType,
    };
    dispatch(takeImage(data));
    setDataImage(null);
    navigation.navigate('Checkpoint');
  };

  return (
    <SafeAreaView style={styles.container}>
      {dataImage === null ? (
        <RNCamera
          ref={cameraRef}
          autoFocusPointOfInterest={autoFocusPoint.normalized}
          type={type}
          ratio={ratio}
          style={{flex: 0.95}}
          autoFocus={autoFocus}
        />
      ) : (
        <View style={{alignItems: 'center', flex: 0.95}}>
          <Image
            source={{
              uri: dataImage.uri,
            }}
            style={{width: wp('100%'), height: hp('74%')}}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      )}
      <View style={styles.footer}>
        <View style={{flex: 0.2}} />
        <View>
          {dataImage === null ? (
            <TouchableOpacity onPress={takePictures} style={styles.capture}>
              <Icon
                name="camera"
                size={25}
                type="ionicon"
                color="#ED9923"
                reverse
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setDataImage(null)}
              style={(styles.capture, {alignItems: 'center'})}>
              <Icon
                name="camera"
                size={25}
                type="ionicon"
                color="#ED9923"
                reverse
              />
              <Text
                style={{fontSize: 9, fontFamily: 'Montserrat', color: 'white'}}>
                RE-CAPTURE
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.nextContainer}>
          {dataImage !== null && (
            <TouchableOpacity onPress={takeNextImage}>
              <Text style={styles.nextButton}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextButton: {
    fontFamily: 'Bebas Neue',
    fontSize: 14,
    color: 'white',
  },
  nextContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3b3733',
  },
});
