import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Icon, Text, Avatar} from 'react-native-elements';

import {styles} from './Style';
import AddSchedule from './Add';
import ViewSchedule from './View';

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

  const renderItem = ({item, separators}) => {
    return (
      <TouchableOpacity
        style={styles.contentContainer}
        key={item.id}
        onPress={toggleOverlay(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={styles.avatar}>
          <Avatar
            size="medium"
            rounded
            title={item.id}
            containerStyle={{backgroundColor: item.color}}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentBody}>
            <Text style={styles.contentTitle}>{item.title}</Text>
            <Text style={styles.contentType}>{item.type}</Text>
          </View>
          <View>
            <Text style={styles.contentTime}>{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
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

      {openList !== null && (
        <ViewSchedule
          visibility={visible}
          item={openList}
          navigation={navigation}
          onPress={setVisible}
        />
      )}

      <AddSchedule visibility={visibleAdd} onPress={setVisibleAdd} />
    </View>
  );
}
