import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import api from '../../api';
import {screenWidth} from '../../utils/AppDimensions';

interface Category {
  categoryName: string;
}

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [data, setData] = React.useState<Category[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/ad/product/categories');
      setData(response.data.data.categories || '');
    };
    getData();
  }, []);
  console.log(data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 40, backgroundColor: 'grey'}}></View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: screenWidth * 0.25,
              height: screenWidth * 0.15,
              backgroundColor: 'grey',
              margin: 10,
            }}>
            <Text>{item.categoryName}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
};

export default Home;
