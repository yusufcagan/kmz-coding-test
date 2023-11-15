import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {screenWidth} from '../utils/AppDimensions';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={require('../assets/arrow-left.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFEECD',
  },
  text: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    marginLeft: 20,
  },
  icon: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
  },
});
export default Header;
