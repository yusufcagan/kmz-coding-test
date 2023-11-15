import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {screenHeight, screenWidth} from '../../utils/AppDimensions';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import api from '../../api';
import {RootStackParamList} from '../../types';

interface LoginProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const handleLogin = async () => {
    try {
      const response = await api.post('/sf/auth/login', {
        username,
        password,
      });
      if (response.status === 200) {
        Alert.alert('Giriş Başarılı');
        navigation.navigate('Home');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{margin: 22}}>
        <View style={{alignItems: 'center', marginTop: screenHeight / 25}}>
          <Text style={{fontSize: 33, color: '#000'}}>Hoş Geldiniz</Text>
          <Text style={{fontSize: 18}}>Lütfen giriş yapınız</Text>
        </View>
        <View style={[styles.input, {marginTop: screenHeight / 8}]}>
          <Image
            source={require('../../assets/people.png')}
            style={{width: screenWidth * 0.05, height: screenWidth * 0.05}}
          />
          <TextInput
            placeholder="E-Posta"
            value={username}
            onChangeText={val => setUsername(val)}
          />
        </View>
        <View style={[styles.input, {justifyContent: 'space-between'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/lock.png')}
              style={{width: screenWidth * 0.05, height: screenWidth * 0.05}}
            />
            <TextInput
              placeholder="Şifre"
              value={password}
              onChangeText={val => setPassword(val)}
            />
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
        <TouchableOpacity>
          <Text style={{color: 'red', alignSelf: 'flex-end', marginTop: 20}}>
            Şifremi Unuttum
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={{color: '#fff'}}>Giriş</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: screenHeight / 22,
          }}>
          <Text style={{color: '#000'}}>Henüz üye değilmisin ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{marginLeft: 10, color: 'red'}}>Kayıt Ol</Text>
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
export default Login;
