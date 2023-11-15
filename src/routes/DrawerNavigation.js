import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useState} from 'react';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/ad/product/categories');
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
