import React from 'react';
import {View} from 'react-native';
import {Text, Icon, Overlay} from 'react-native-elements';

import {alertStyle as styles} from './Style';

import Buttons from '../../components/Button';
import {TYPOGRAPHY} from '../../assets/styles/typography';

const Alert = ({visible, onPress, onPressCall}) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={onPress}
      overlayStyle={styles.overlay}>
      <View style={styles.closeButton}>
        <Icon
          name="close-circle-outline"
          size={40}
          type="ionicon"
          color={TYPOGRAPHY.COLOR.Default}
          onPress={onPress}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text h3 h3Style={styles.title}>
          C'mon mate!!!
        </Text>
      </View>
      <Text style={styles.content}>
        You were drinking before your shift. Please call Adrian on 0123456789.
      </Text>
      <View style={styles.containerCall}>
        <Buttons
          title="Call now"
          onPress={onPressCall}
          containerStyle={styles.callButton}
        />
      </View>
    </Overlay>
  );
};

export default Alert;
