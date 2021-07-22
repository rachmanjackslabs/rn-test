import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

import {headerStyle as styles} from './Style';

export default function Header({state}) {
  return (
    <View style={styles.bodyTop}>
      <View style={styles.contentHeader}>
        <Text h2 h2Style={styles.h2header}>
          GOOD EVENING {state.data.user_name}
        </Text>
        <Text style={styles.headerBodyText}>
          Are you ready for your shift today?
        </Text>
      </View>
    </View>
  );
}
