import React, {useRef} from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Bottom from './Bottom';
import StringOfLanguage from '../Localization/index';
import Style from './Style';
import Icons from '../utils/Icons';
const HomeHeader = () => {
  const props = useRef();
  return (
    <LinearGradient
      colors={StringOfLanguage.Homebackground}
      start={{x: 0, y: 0}}
      style={Style.header}>
      <View>
        <TouchableOpacity onPress={() => alert('chage the ProviderMode')}>
          <Image
            style={Style.image}
            source={Icons.Logo}
          />
        </TouchableOpacity>
      </View>
      <View style={Style.notificationview}>
        <TouchableOpacity onPress={() => alert('Notification')}>
          <Image
            style={Style.notification}
            source={Icons.Notification}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeHeader;
