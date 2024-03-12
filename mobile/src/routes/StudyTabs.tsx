import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { TeacherList } from '../screens/TeacherList';
import { Favorites } from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export function StudyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {
        color: '#8257e5', 
      },
    }}
  >
    <Tab.Screen
      name="Proffys"

      component={TeacherList}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons
            name={focused ? 'ios-easel' : 'ios-easel-outline'}
            size={size}
            color={focused ? '#8257e5' : '#6A6180'}
            />
        ),
      }}
    />
    <Tab.Screen
      name="favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({ size, focused }) => (
          <Ionicons
            name={focused ? 'ios-heart' : 'ios-heart-outline'}
            size={size}
            color={focused ? '#8257e5' : '#6A6180'}
            />
        ),
      }}
    />
  </Tab.Navigator>
);
}