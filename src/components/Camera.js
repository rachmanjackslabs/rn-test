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

import {TYPOGRAPHY} from '../assets/styles/typography';

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

    dispatch(takeImage(data)).then(() => {
      setDataImage(null);
      navigation.navigate('Checkpoint');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {dataImage === null ? (
        <RNCamera
          ref={cameraRef}
          autoFocusPointOfInterest={autoFocusPoint.normalized}
          type={type}
          ratio={ratio}
          style={styles.camera}
          autoFocus={autoFocus}
        />
      ) : (
        <View style={styles.containerImage}>
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
        <View style={styles.empty} />
        <>
          {dataImage === null ? (
            <TouchableOpacity onPress={takePictures} style={styles.capture}>
              <Icon
                name="camera"
                size={25}
                type="ionicon"
                color={TYPOGRAPHY.COLOR.Default}
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
                color={TYPOGRAPHY.COLOR.Default}
                reverse
              />
              <Text style={styles.capture}>RE-CAPTURE</Text>
            </TouchableOpacity>
          )}
        </>
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
    fontFamily: TYPOGRAPHY.FONT.BebasNeue,
    fontSize: 14,
    color: TYPOGRAPHY.COLOR.White,
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
    backgroundColor: TYPOGRAPHY.COLOR.Primary,
  },
  camera: {
    flex: 0.95,
  },
  containerImage: {
    alignItems: 'center',
    flex: 0.95,
  },
  capture: {
    fontSize: 9,
    fontFamily: TYPOGRAPHY.FONT.Montserrat,
    color: TYPOGRAPHY.COLOR.White,
  },
  empty: {
    flex: 0.2,
  },
});
