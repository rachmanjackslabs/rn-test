/* eslint-disable react-native/no-inline-styles */
import React, {useState, createRef} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, Text, Overlay, Avatar} from 'react-native-elements';
import CreateScheduleScreen from '../components/CreateSchedule';
import ScheduleComponent from '../components/Schedule';

const {width} = Dimensions.get('screen');

export default function ScheduleScreen({navigation}) {
  const [list, setList] = useState([
    {
      id: 1,
      title: '16 Chilcott Dr Goonellabah',
      type: 'cash in transit',
      time: '19:00',
      color: '#ABC873',
      typeId: 1,
    },
    {
      id: 2,
      title: '621 Ballina Rd Goonellabah',
      type: 'Site check',
      time: '19:00',
      color: '#ABC873',
      typeId: 2,
    },
    {
      id: 3,
      title: '104 Eltham Rd Bexhill ',
      type: 'Site check',
      time: '19:00',
      color: '#F1BA2B',
      typeId: 2,
    },
    {
      id: 4,
      title: 'U-STORE Storage Sheds 4 De-Havilland Dr Ballina',
      type: 'escorted safe passage',
      time: '19:00',
      color: '#F46767',
      typeId: 3,
    },
  ]);
  const [visible, setVisible] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [openList, setOpenList] = useState(null);

  const toggleOverlay = item => () => {
    setOpenList(item);
    setVisible(!visible);
  };

  const toggleOverlayAdd = () => {
    setVisibleAdd(!visibleAdd);
  };

  const renderItem = ({item, index, separators}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 20,
        }}
        key={item.id}
        onPress={toggleOverlay(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View
          style={{
            flex: 0.15,
          }}>
          <Avatar
            size="medium"
            rounded
            title="1"
            containerStyle={{backgroundColor: item.color}}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
            flex: 0.85,
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                fontFamily: 'Bebas Neue',
                fontSize: 14,
                maxWidth: width / 2,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 7,
                maxWidth: width / 2,
              }}>
              {item.type}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Montserrat',
                fontSize: 10,
                maxWidth: width / 2,
                marginLeft: 20,
              }}>
              {item.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.body}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity onPress={toggleOverlayAdd} style={styles.footer}>
        <Icon name="add" size={25} type="ionicon" color="#ED9923" reverse />
      </TouchableOpacity>

      <Overlay
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={{width: '70%', padding: 0}}>
        <ScheduleComponent
          openList={openList}
          navigation={navigation}
          setVisible={setVisible}
        />
      </Overlay>

      <Overlay
        isVisible={visibleAdd}
        onBackdropPress={() => setVisibleAdd(false)}
        overlayStyle={{width: '70%', padding: 0}}>
        <CreateScheduleScreen
          openList={openList}
          navigation={navigation}
          setVisible={setVisibleAdd}
        />
      </Overlay>
    </KeyboardAvoidingView>
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
