import React from 'react';
import {View, Text} from 'react-native';
import {CardMenu} from '../../Kecil';

const ListMenu = ({menus}) => {
  return (
    <View>
      {menus.map(menu => {
        return <CardMenu menu={menu} key={menu.id} />;
      })}
    </View>
  );
};

export default ListMenu;
