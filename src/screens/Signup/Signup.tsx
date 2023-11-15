import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {screenHeight, screenWidth} from '../../utils/AppDimensions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

interface SingupProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
}

const Signup: React.FC<SingupProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{margin: 22}}>
        <View style={{alignItems: 'center', marginTop: screenHeight / 25}}>
          <Text style={{fontSize: 33, color: '#000'}}>Hoş Geldiniz</Text>
          <Text style={{fontSize: 18}}>Kayıt için bilgileri giriniz</Text>
        </View>
        <View style={[styles.input, {marginTop: screenHeight / 8}]}>
          <Image
            source={require('../../assets/people.png')}
            style={{width: screenWidth * 0.05, height: screenWidth * 0.05}}
          />
          <TextInput placeholder="E-Posta" />
        </View>
        <View style={[styles.input, {justifyContent: 'space-between'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/lock.png')}
              style={{width: screenWidth * 0.05, height: screenWidth * 0.05}}
            />
            <TextInput placeholder="Şifre" />
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/hidden.png')}
              style={{
                width: screenWidth * 0.05,
                height: screenWidth * 0.05,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.input, {justifyContent: 'space-between'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/lock.png')}
              style={{width: screenWidth * 0.05, height: screenWidth * 0.05}}
            />
            <TextInput placeholder="Şifre Tekrar" />
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/hidden.png')}
              style={{
                width: screenWidth * 0.05,
                height: screenWidth * 0.05,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#fff'}}>Kayıt Ol</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: screenHeight / 22,
          }}>
          <Text style={{color: '#000'}}>Zaten Üyemisin ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{marginLeft: 10, color: 'red'}}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    marginTop: screenHeight / 20,
  },
});
export default Signup;
